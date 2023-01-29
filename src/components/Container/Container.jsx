import PropTypes from 'prop-types';
import { ContainerBox, ContainerTitle } from './Container.styled';

export const Container = ({ title, children }) => {
  return (
    <ContainerBox>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </ContainerBox>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
