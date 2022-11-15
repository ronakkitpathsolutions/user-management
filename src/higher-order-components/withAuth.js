export const withAuth = (RenderComponent, NavigateComponent) => ({ isLogged, to, replace, ...props }) => {
    return isLogged ?  <RenderComponent {...props} /> : <NavigateComponent {...{to, replace}} />
}