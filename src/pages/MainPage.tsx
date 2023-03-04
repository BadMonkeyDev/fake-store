import React from 'react';
import Banner from "widgets/Banner";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectCategories} from "store/reducers/categoriesSlice";
import {Link} from "react-router-dom";
import {PATHS} from "../http";
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";

const StyledMainPage = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  height: inherit;
`

const MainPage = () => {
    const categories = useSelector(selectCategories)
    useSetTabOnMount(routes.home.id)
    return (
        <StyledMainPage>
            {categories?.map( (category) =>
                <Link key={category} to={PATHS.PRODUCTS} style={{ textDecoration: 'none' }}>
                    <Banner background={`https://picsum.photos/id/${Math.floor(Math.random() * 30)}/600/400`}>{category}</Banner>
                </Link>
            )}
        </StyledMainPage>
    );
};

export default MainPage;