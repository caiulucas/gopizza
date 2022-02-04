export type PizzaNavigationProps = {
  id: string;
};

export type PizzaRegisterNavigationProps = {
  id?: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      menu: undefined;
      pizza: PizzaNavigationProps;
      pizzaRegister: PizzaRegisterNavigationProps;
      orders: undefined;
    }
  }
}
