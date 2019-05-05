import React from 'react';

import { graphql, compose } from 'react-apollo';
import { FIND_BY_CATEGORY } from '../../queries/queries';

function SideMenu() {
  const categories = [
    'Mobiles',
    'Computers',
    'Books',
    'Fitness',
    'Baby Care',
    'Magazines',
    'Auto Accessories',
    'Movies and Music',
    'Video and Games',
    'Home and Kitchen',
    'Furniture',
    'Grocery'
  ];
  return (
    <div className="side-menu" id="side-menu">
      <ul>
        {categories.map(category => {
          return (
            <li key={category}>
              {category}
              <i className="fa fa-angle-right" />
              <ul>
                <li>{category}-item-1</li>
                <li>{category}-item-2</li>
                <li>{category}-item-3</li>
                <li>{category}-item-4</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default compose(
  graphql(FIND_BY_CATEGORY, {
    options: props => {
      return {
        variables: {
          category: props.category
        }
      };
    }
  })
)(SideMenu);
