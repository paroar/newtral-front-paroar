/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Catalogue } from '../components';
import Loading from '../components/loading';

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
    ? <Loading />
    : (
      <Catalogue>
        {politicians.map((item) => (
          <Catalogue.Item key={item._id}>
            <Link to={`/details/${item._id}`}>
              <Catalogue.Info>
                <Catalogue.Image src={item.GENERO === 'Mujer' ? '/images/woman.png' : '/images/man.png'} alt="" />
                <Catalogue.Title>{item.TITULAR}</Catalogue.Title>
              </Catalogue.Info>
            </Link>
          </Catalogue.Item>
        ))}
      </Catalogue>
    ));
};

export default CatalogueContainer;
