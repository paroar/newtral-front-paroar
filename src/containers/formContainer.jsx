/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../components/loading';
import { Accordion, Form } from '../components';
import { dictionary } from '../constants/csv_dictionary';

const FormContainer = () => {
  const { id } = useParams();
  const history = useHistory();

  const [politician, setPolitician] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    register, handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/${id}`);
        const json = await res.json();
        setPolitician(json);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (isLoading
    ? <Loading />
    : (
      <Form>
        <Form.Frame>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Accordion>
              {Object.entries(politician).map((item) => ((item[0] === '_id')
                ? null
                : (
                  <Accordion.Item key={item[0]}>
                    <Accordion.Header>{dictionary[item[0]]}</Accordion.Header>
                    <Accordion.Body>
                      <input
                        {...register(item[0], { required: true })}
                        placeholder={dictionary[item[0]]}
                        defaultValue={item[1]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                )))}
            </Accordion>
            <Form.Submit />
          </form>
        </Form.Frame>
      </Form>
    ));
};

export default FormContainer;
