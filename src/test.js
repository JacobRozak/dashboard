<Route
          path="/"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />


        <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>

                        ) : (
                            <section className="navbar-section">
                            <Link to="/" className="btn btn-link text-secondary">
                                <span className="text-secondary">home</span>
                                </Link>
                            <Link to="/login" className="btn btn-link text-secondary">
                            <span className="text-secondary">login</span>
                    </Link>
                            <Link to="/signup" className="btn btn-link">
                            <span className="text-secondary">sign up</span>
                    </Link>
                        </section>
                    )}
                    </div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">MERN Passport</h1>
                    </div>
                    </header>
                        )
            </div>


---------------------------------------------------------------------------------------------------------------------

<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>
