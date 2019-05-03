import React from 'react';

import { graphql, compose } from 'react-apollo';
import { FIND_BY_CATEGORY } from '../../queries/queries';

function SideMenu() {
  return (
    <div className="side-menu" id="side-menu">
      <ul>
        <li>
          Mobiles
          <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-2</li>
            <li>Sub Menu-2</li>
            <li>Sub Menu-2</li>
            <li>Sub Menu-2</li>
          </ul>
        </li>

        <li>
          Computers <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-3</li>
            <li>Sub Menu-3</li>
            <li>Sub Menu-3</li>
            <li>Sub Menu-3</li>
          </ul>
        </li>

        <li>
          Books <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-4</li>
            <li>Sub Menu-4</li>
            <li>Sub Menu-4</li>
            <li>Sub Menu-4</li>
          </ul>
        </li>

        <li>
          Fitness <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-5</li>
            <li>Sub Menu-5</li>
            <li>Sub Menu-5</li>
            <li>Sub Menu-5</li>
          </ul>
        </li>

        <li>
          Beby Care <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-6</li>
            <li>Sub Menu-6</li>
            <li>Sub Menu-6</li>
            <li>Sub Menu-6</li>
          </ul>
        </li>

        <li>
          Magazines <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-7</li>
            <li>Sub Menu-7</li>
            <li>Sub Menu-7</li>
            <li>Sub Menu-7</li>
          </ul>
        </li>

        <li>
          Auto Accessories <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-8</li>
            <li>Sub Menu-8</li>
            <li>Sub Menu-8</li>
            <li>Sub Menu-8</li>
          </ul>
        </li>

        <li>
          Movies and Music <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-9</li>
            <li>Sub Menu-9</li>
            <li>Sub Menu-9</li>
            <li>Sub Menu-9</li>
          </ul>
        </li>

        <li>
          Video and Games <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-10</li>
            <li>Sub Menu-10</li>
            <li>Sub Menu-10</li>
            <li>Sub Menu-10</li>
          </ul>
        </li>

        <li>
          Home and Kitchen <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-11</li>
            <li>Sub Menu-11</li>
            <li>Sub Menu-11</li>
            <li>Sub Menu-11</li>
          </ul>
        </li>

        <li>
          Furniture <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-12</li>
            <li>Sub Menu-12</li>
            <li>Sub Menu-12</li>
            <li>Sub Menu-12</li>
          </ul>
        </li>

        <li>
          Grocery <i className="fa fa-angle-right" />
          <ul>
            <li>Sub Menu-13</li>
            <li>Sub Menu-13</li>
            <li>Sub Menu-13</li>
            <li>Sub Menu-13</li>
          </ul>
        </li>
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
