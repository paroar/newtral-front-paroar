/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Accordion, Form } from '../components';
import { dictionary } from '../constants/csv_dictionary';

const FormCreateContainer = () => {
  const history = useHistory();

  const {
    register, handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json);
      history.push(`/details/${json._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <Form>
      <Form.Frame>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Accordion>
            {Object.entries(dictionary).map((item) => (
              <Accordion.Item key={item[0]}>
                <Accordion.Header>{item[1]}</Accordion.Header>
                <Accordion.Body>
                  <input {...register(item[0], { required: true })} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <Form.Submit value="Crear" />
        </form>
      </Form.Frame>
    </Form>
  );
};

export default FormCreateContainer;
