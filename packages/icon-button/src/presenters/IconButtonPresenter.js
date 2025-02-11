import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { AVAILABLE_SURFACES, AVAILABLE_VARIANTS } from "../constants";

const IconButtonPresenter = props => {
  const {
    className,
    disabled,
    hasFocus,
    hasHover,
    icon: higIcon,
    isPressed,
    link,
    on,
    onClick,
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    stylesheet: customStylesheet,
    surface,
    title,
    variant,
    ...otherProps
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const linkProps = link
          ? {
              tabIndex: disabled ? "-1" : "0",
              href: link
            }
          : {};
        const iconButtonIconClassName = createCustomClassNames(
          className,
          "icon-button-icon"
        );
        const Element = props.link ? "a" : "button";
        const styles = stylesheet(props, resolvedRoles, metadata.densityId);
        const icon = React.cloneElement(higIcon, {
          className: cx(css(styles.iconButtonIcon), iconButtonIconClassName)
        });
        const tabIndex = disabled ? "-1" : "0";
        return (
          <Element
            {...otherProps}
            className={cx(css(styles.iconButton), className)}
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            tabIndex={tabIndex}
            title={title}
            {...linkProps}
          >
            {icon}
          </Element>
        );
      }}
    </ThemeContext.Consumer>
  );
};

IconButtonPresenter.displayName = "IconButtonPresenter";

IconButtonPresenter.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  icon: PropTypes.element,
  isPressed: PropTypes.bool,
  link: PropTypes.string,
  on: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  stylesheet: PropTypes.func,
  surface: PropTypes.oneOf(AVAILABLE_SURFACES),
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS)
};

export default IconButtonPresenter;
