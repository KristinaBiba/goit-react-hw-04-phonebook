import {Input} from './Filter_css'

import PropTypes from 'prop-types'

export const Filter = ({value, onChange}) => {
      return (
          <Input
              name="filter"
              value={value}
              onChange={onChange}
              />)
};
    
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}