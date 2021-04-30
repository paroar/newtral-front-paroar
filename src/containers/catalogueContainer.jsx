/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Catalogue } from '../components';

const CatalogueContainer = () => {
  const [politicians, setPoliticians] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL);
        const json = await res.json();
        setPoliticians(json);
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
      <Catalogue>
        {politicians.map((item) => (
          <Link to={`/details/${item._id}`}>
            <Catalogue.Item key={item._id}>
              <Catalogue.Image src={item.GENERO === 'Mujer' ? '/images/woman.png' : '/images/man.png'} alt="" />
              <Catalogue.Info>
                <Catalogue.Title>{item.TITULAR}</Catalogue.Title>
                <Catalogue.Text>{item.PARTIDO}</Catalogue.Text>
                <Catalogue.Text>
                  {item.SUELDOBASE_SUELDO}
                  €
                </Catalogue.Text>
              </Catalogue.Info>
            </Catalogue.Item>
          </Link>
        ))}
      </Catalogue>
    ));
};

export default CatalogueContainer;
