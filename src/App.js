import React, { Component } from 'react'
import Navbar from './component/navbar';
import News from './component/news';
import { Route, Routes } from "react-router-dom";
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';



export default class App extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <div className="container">

                    <div className="row">

                        <div className="col-md">

                            <Routes>
                                <Route

                                    path="/Login"

                                    element={

                                        <Login

                                        />}

                                />
                                <Route

                                    path="/Signup"

                                    element={

                                        <Signup

                                        />}

                                />
                                <Route

                                    path="/"

                                    element={

                                        <News key="general"

                                            category="general" />}

                                />
                                <Route

                                    path="/General"

                                    element={

                                        <News key="general"

                                            category="general" />}

                                />

                                <Route

                                    path="/Entertainment"

                                    element={

                                        <News key="entertainment"

                                            category="entertainment" />

                                    }

                                />

                                <Route

                                    path="/Technology"

                                    element={

                                        <News key="technology"

                                            category="technology" />}

                                />

                                <Route

                                    path="/Sports"

                                    element={

                                        <News key="sports"

                                            category="sports" />}

                                />

                                <Route

                                    path="/Business"

                                    element={

                                        <News key="business"

                                            category="business" />}

                                />

                                <Route

                                    path="/Health"

                                    element={

                                        <News key="health"

                                            category="health" />}

                                />

                                <Route

                                    path="/Science"

                                    element={

                                        <News key="science"

                                            category="science" />}

                                />

                            </Routes>

                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
