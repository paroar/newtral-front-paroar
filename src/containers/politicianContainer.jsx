import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from '../components';
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
    ? <img src="/images/loading.gif" alt="loading" />
    : (
      <>
        <Details>
          <Details.Frame>
            <Details.Image src={politician.GENERO === 'Mujer' ? '/images/woman.png' : '/images/man.png'} alt="politician" />
            <AccordionContainer data={politician} />
          </Details.Frame>
        </Details>
      </>
    ));
};

export default PoliticianContainer;
