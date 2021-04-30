/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from '../components';
import Loading from '../components/loading';
import AccordionContainer from './accordionContainer';

const PoliticianContainer = () => {
  const { id } = useParams();

  const [politician, setPolitician] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      <>
        <Details>
          <Details.Frame>
            <Details.Image src={politician.GENERO === 'Mujer' ? '/images/woman.png' : '/images/man.png'} alt="politician" />
            <AccordionContainer data={politician} />
          </Details.Frame>
          <Details.Frame>
            <Details.Actions id={politician._id} />
          </Details.Frame>
        </Details>
      </>
    ));
};

export default PoliticianContainer;
