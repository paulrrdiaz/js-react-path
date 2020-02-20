http://bit.ly/frontendNext_reactAllTheThings

# React Basics

## Declarative Programming

Javascript example:

```javascript
// Imperative
const toLowerCase = input => {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toLowerCase());
  }
  return output;
};

// Declarative
const toLowerCase = input => input.map(value => value.toLowerCase());
```

React example:

```javascript
const myLatLng = {
  lat: 51.5258541,
  lng: -0.08040660000006028,
};

// Imperative
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 5,
  center: myLatLng,
});

const marker = new google.maps.Marker({
  position: myLatLng,
  title: "Hello World!!!",
});

marker.setMap(map);

// Declarative
<Gmaps lat={myLatLng.lat} lng={myLatLng.lng} zoom={12}>
  <Marker lat={myLatLng.lat} lng={myLatLng.lng} title="Hello World!!!"></Marker>
</Gmaps>;
```

What do you want to achieve?

## React Elements

```javascript
{
  type: 'div',
  props: {
    color: 'red',
    children: 'Hello world!!!'
  }
}
```

# Common Sense

## Common Patterns

**Multi-Line**

```javascript
// Good
<div>
  <Header />
  <div>
    <Main content={...props} />
  <div>
</div>

// Bad
<div><Header /><div><Main content={...props} /><div></div>

// Good
return <div />;

// Good
return(
  <div />
);

return
  <div />
```

**Multi-Properties**

```javascript
// Good
<myAwesomeComponent fizz="buzz" veryLongProperty="bar" onSomething={this.handleSomething} />
```

**Conditionals**

```javascript
// Bad
let button;
if (isLoggedIn) {
  button = <LogOutButton />;
}
return <div>{button}</div>;

// Good
<div>
  {isLoggedIn && <LogOutButton />}
</div>


// Bad
let button;
if (isLoggedIn) {
  button = <LogOutButton />;
} else {
  button = <LogInButton />;
}
return <div>{button}</div>;

// Good
<div>
  {isLoggedIn ? <LogOutButton /> : <LogInButton />}
</div>

// Example
<button>
  {isFetching ? 'Loading...' : 'Load More'}
</button>

// Bad
<div>
  {dataIsReady && (isAdmin || userHasPermissions) && <topSecretComponent />}
</div>

// Good
canShowSecretComponent() {
  const {dataIsReady, isAdmin, userHasPermissions} = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretComponent() && <topSecretComponent />}
</div>


// Better
get canShowSecretComponent() {
  const {dataIsReady, isAdmin, userHasPermissions} = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretComponent && <topSecretComponent />}
</div>
```

**Loops**

```javascript
<ul>
  {items.map(item => (
    <li>{item.title}</li>
  ))}
</ul>
```

```javascript
class MyComponent extends Component {
  renderAdminTools() {
    // code for Admins
  }

  renderUserTools() {
    // code for Users
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        {this.userExists && this.renderUserTools()}
        {this.userIsAdmin && this.renderAdminTools()}
      </div>
    );
  }
}
```

## Container and Presentational pattern

### Containers

- Manipulan data y hacen llamados a algún API
- Pendientes del comportamiento
- Renderizan a los Presentationals
- Define los event handlers
- Están definidos como clases

### Presentationals

- Renderizan el HTML u otros componentes
- Pendientes de lo visual
- Reciben data de sus componentes padres en forma de props
- Normalmente están definidos como stateless functional components

```javascript
const GeolocationPresentational = ({ latitude, longitude }) => (
  <div>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
);

GeolocationPresentational.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

class GeolocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  }

  render() {
    return <GeolocationPresentational {...this.state} />;
  }
}
```

## Links

### React

- [Documentación oficial](https://reactjs.org/docs/hello-world.html)
- [Reconciliation process](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
