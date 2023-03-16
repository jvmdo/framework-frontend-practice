# What I Learned

1. Note that in this configuration, the OrderSummary component will only be rendered when the user navigates to the /order path while on the Home page. If the user navigates directly to the /order path, they will not see the Home component.

2. Also, make sure that you're using the Outlet component from react-router-dom inside the Home component. The Outlet component renders the child routes nested under the current route.

# Shit

1. <https://github.com/remix-run/react-router/discussions/9792>
