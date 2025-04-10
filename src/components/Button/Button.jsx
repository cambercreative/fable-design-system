import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const getVariantStyles = (variant, theme) => {
  const variants = {
    primary: css`
      background-color: ${theme.colors.primary};
      color: white;
      border: none;
      
      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
      
      &:active {
        background-color: ${theme.colors.primaryDark};
      }
    `,
    secondary: css`
      background-color: white;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.surface};
      }
      
      &:active {
        background-color: ${theme.colors.surface};
      }
    `,
    tertiary: css`
      background-color: transparent;
      color: ${theme.colors.primary};
      border: none;
      
      &:hover {
        background-color: ${theme.colors.surface};
      }
      
      &:active {
        background-color: ${theme.colors.surface};
      }
    `,
  };
  
  return variants[variant] || variants.primary;
};

const getSizeStyles = (size, theme) => {
  const sizes = {
    small: css`
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: 0.875rem;
    `,
    medium: css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      font-size: 1rem;
    `,
    large: css`
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      font-size: 1.125rem;
    `,
  };
  
  return sizes[size] || sizes.medium;
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.default};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${props => getVariantStyles(props.variant, props.theme)}
  ${props => getSizeStyles(props.size, props.theme)}
`;

const Button = ({ children, variant, size, disabled, type, onClick, ...rest }) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  type: 'button',
  onClick: () => {},
};

export default Button;