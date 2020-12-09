import React from 'react';
import {Footer} from "../../parts/footer";
import {CategoryCards} from "./cate-cards";
import mockData from './mock-card-data';

import '../../assets/scss/home/home.scss'

export const Home = () => {
  return (
    <div className="home">
      <div className="contents-wrapper">
        {mockData.map((data) => <CategoryCards key={data.key} data={data} />)}
      </div>
      <Footer />
    </div>
  )
}


// <CategoryCards data={mockData} />
