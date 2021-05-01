/* eslint-disable no-underscore-dangle */
import React, {
  useState, useEffect, useContext,
} from 'react';
import { Catalogue, Actions, Pagination } from '../components';
import Loading from '../components/loading';
import { PaginationContext } from '../contexts/paginaitonContext';

const CatalogueContainer = () => {
  const [politicians, setPoliticians] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { page, setPageLimit } = useContext(PaginationContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}?page=${page}`);
        const json = await res.json();
        setPoliticians(json.politicians);
        setPageLimit(json.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [page]);

  return (isLoading
    ? <Loading />
    : (
      <>
        <Catalogue>
          {politicians.map((item) => (
            <Catalogue.ButtonLink to={`/details/${item._id}`}>
              <Catalogue.Item key={item._id}>
                <Catalogue.Info>
                  <Catalogue.Image src={item.GENERO === 'Mujer' ? '/images/woman.png' : '/images/man.png'} alt="" />
                  <Catalogue.Title>{item.TITULAR}</Catalogue.Title>
                </Catalogue.Info>
                <Actions>
                  <Actions.Button to={`/update/${item._id}`} src="/images/icons/edit.png" alt="edit" />
                  <Actions.Button to="" src="/images/icons/delete.png" alt="delete" />
                </Actions>
              </Catalogue.Item>
            </Catalogue.ButtonLink>
          ))}
        </Catalogue>
        <Pagination>
          <Pagination.Page />
        </Pagination>
      </>
    ));
};

export default CatalogueContainer;
