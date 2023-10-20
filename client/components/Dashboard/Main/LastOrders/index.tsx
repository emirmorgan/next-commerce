import Order from "./Order";

export default function LastOrders() {
  return (
    <div className="border rounded mt-3">
      <div className="border-b p-2">
        <h1 className="font-bold">Latest orders</h1>
      </div>
      <ul>
        <Order
          orderId={3741}
          name="John Doe"
          contact="+123456789"
          orderStatus="preparing"
          orderTotal={50}
          orderDate="01.01.1991"
        />
        <Order
          orderId={4326}
          name="John Doe"
          contact="+123456789"
          orderStatus="shipping"
          orderTotal={60}
          orderDate="01.01.1991"
        />
        <Order
          orderId={2246}
          name="John Doe"
          contact="+123456789"
          orderStatus="delivered"
          orderTotal={70}
          orderDate="01.01.1991"
        />
        <Order
          orderId={3741}
          name="John Doe"
          contact="+123456789"
          orderStatus="preparing"
          orderTotal={50}
          orderDate="01.01.1991"
        />
        <Order
          orderId={4326}
          name="John Doe"
          contact="+123456789"
          orderStatus="shipping"
          orderTotal={60}
          orderDate="01.01.1991"
        />
        <Order
          orderId={2246}
          name="John Doe"
          contact="+123456789"
          orderStatus="delivered"
          orderTotal={70}
          orderDate="01.01.1991"
        />
        <Order
          orderId={3741}
          name="John Doe"
          contact="+123456789"
          orderStatus="preparing"
          orderTotal={50}
          orderDate="01.01.1991"
        />
        <Order
          orderId={4326}
          name="John Doe"
          contact="+123456789"
          orderStatus="shipping"
          orderTotal={60}
          orderDate="01.01.1991"
        />
        <Order
          orderId={2246}
          name="John Doe"
          contact="+123456789"
          orderStatus="delivered"
          orderTotal={70}
          orderDate="01.01.1991"
        />
        <Order
          orderId={3741}
          name="John Doe"
          contact="+123456789"
          orderStatus="preparing"
          orderTotal={50}
          orderDate="01.01.1991"
        />
      </ul>
    </div>
  );
}
