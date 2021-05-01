/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Page, Image } from './styles/pagination';
import { PaginationContext } from '../../contexts/paginaitonContext';

const Pagination = ({ children }) => <Container>{children}</Container>;

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pagination;

Pagination.Page = () => {
  const { page, pageLimit, dispatch } = useContext(PaginationContext);
  return (
    <>
      <Image src="/images/icons/previous.png" alt="previous" onClick={() => dispatch('decrement')} />
      <Page>
        <>
          {page}
          <span>/</span>
          {pageLimit}
        </>
      </Page>
      {page >= pageLimit ? <Image src="/images/icons/next.png" alt="next" /> : <Image src="/images/icons/next.png" alt="next" onClick={() => dispatch('increment')} />}
    </>
  );
};
