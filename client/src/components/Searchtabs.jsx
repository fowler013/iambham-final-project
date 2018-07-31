import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';




let SearchTabs = (data) => {
    let {recipe} = data
    let { calories, dietLabels, healthLabels, image, label: title, source, totalTime: time, yield: servings, ingredientLines: ingr, url: insturctionurl, uri: recipeIDurl } = recipe


        return <React.Fragment>
            <div className="col my-1">
              <div className="card m-auto" style={{ height: "24rem", width: "18rem" }}>
                <div className="card-img-top" style={{ height: "10rem", width: "18rem", backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                  <div className="d-flex justify-content-end">
                    <div className="text-center bg-warning p-2" style={{borderBottomLeftRadius: '25%'}}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT6SURBVGhD7ZppqHZTFMevefYaIsqUEgolRDLlgyIRIUP0SskXU8YyfDN8UIZknoeIzApJGSJT5jFTMs9TZOb3O9lP+9l3nedMz7188K9fb/c8+6y9zz5nr73W2u/MlLUh7AunwKVwE9wGt8BlcAYcAlvA4vCf0RKwG9wAH8NfHfge7oGFsAL8K1oZToXPIBpkV34C3+D6MC9aEk6C7yAa0FB+Ax9oVZgzbQmvQjSAafMFHABT19HwM0SdRnwCjxbXXgIn4tfsWhO+naVhsBaFCyHqJMdv3AW/O6wByn/zNvuAWgZ2govgK8jbRDwMK0FvLQbXQmQ88SkcCQsg0lNgOwecHjDXUrAfNH2yz0NdH41yxiKj4qI8D5pmalnYFaKHyKUTOQ6+gag/eRK010lHQWRM/P63hrnQWuDsR/2KG2xr6Z1+gcjQK7AutNUmcCPsVf3VTsvDHRD1L0dAo9ypX4PIgF6n66K7G7z32+qv9tLJOAHlGORHWA8mys0uuvlzaLw5kN91suEkdZHrIb8/5y6olbMd7dgu7G2hj/K328frrA51Mdz2EOo0iG44H/rqA0h21vZCDx0I+XgS98MsGVJHAeCXsAr0Vf6GN/BCDy0CZZSQ2BjG5I4cNTwWhii3tZkXemoryG0lzoQxXQ9lI13wkLexIuT2toMhegFye/IOjClaUGZ2Q+TmltvbBYboGMjtJUY5zEYQNUhBXl/5/eb29oQh0oP9AblNOQwqmWOXP0pfL5NkGJPb0/sMlZFFblNGXtVCQfmj0epQHQS5zbNhqK6D3KbcB5UugfLHJ2BIDrADRAnU8dBXOo+zoLRpClCpLqYR84nloKseg8jeD2BQ2EXuI3dCZE/eh0qWZKIGCcs9XeWAI1vi2+oiN9LITmIUkN4MUQOpy+ya9BxE9uQtWA3ayizybYhsyUdQ6Qoof3wR9oY+D6EOhdJmTtdsz/Wq+44m/Q2o5DZf/jhaQAN0AliUKG0nDMWtC3SRVZXSziNQ6WAofzQ86ZwfBzIXN8a6Hco+xLpAF0X5iQ9XqS4gs2QzLTnzF0PUz8nQRk5slIJbc6tkJ1FC1XW22uh0+BPyfvzbzbNJ5Qab2BxGuhfKBnosPca0ZWz0O+R9OdM7wyQ9APk9Yr5kfj9SnZexeDYXMv+xiJD35X5g1SWScV8UMF4OY/J8ojQsr0PXokFbbQPOaN6fB0KRroG8XWJHmKUo5hIrgHMlU4j3IPV1DpTygct1JS+D4cssmaBYMSlv0BEMDeknaU24GoyOS5ev+34WyjHJxGOHaMMR08xp7CtddRVE47GsOnEz9aTIQ5bo5j478RCdCNE4/Mxa1dn2h8iAGOtM5eClQYY3kZeSC6C16j4xMUzoG0w2yTVxJUT9iuvFNq3lqdJDEBmTD8HFFnqNQpZK23ySeqenIepPrFpameksBxDVknKsAHoMUafk/81P6jJDB6fXilxs4mvYFHrL8/THITKeY/5iVdKSTZL35m32gCTfuLHTg1C3FhK+/bodv5N0u5OyyBwH5UZltePcf64lbgXXnmus7cnuM7AOTFWHw6REaZr4memd5iJoreSxm/tJ1Pm0cLPrex7TWR6yeD4RDaQvHu1ZjZzPTXckgz5z/nchGlwTRr+G4paI2rjyeZFBp0mT5+++LQsYFs90nZZs3gT/F4ML3sq6md1YUvS/ZmZm/gb6+2hrHe2IGAAAAABJRU5ErkJggg==" style={{height: "2rem", width: "2rem"}}/>
                      <p className="mb-0"><small>{time} mins</small></p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    From: {source}
                  </h6>
                  <h5 className="card-title">{title}</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>;
};
export default SearchTabs;