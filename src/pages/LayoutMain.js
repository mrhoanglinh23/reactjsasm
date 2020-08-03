import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Frontend/Footer'
import Header from '../components/Frontend/Header'

const LayoutMain = ({children}) => {
    return (
        <div>
          <div className="site-wrap">
        <Header />
        {children}
        <Footer />
      </div>
        </div>
    )
}

LayoutMain.propTypes = {

}

export default LayoutMain
