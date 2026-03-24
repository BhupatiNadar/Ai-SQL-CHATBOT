from sqlalchemy import Column, String, Integer, ForeignKey, Date, Float
from database import Base


class Categories(Base):
    __tablename__ = "categories"

    category_id = Column(Integer, primary_key=True)
    category_name = Column(String, nullable=False)


class Products(Base):
    __tablename__ = "products"

    product_id = Column(Integer, primary_key=True)
    product_name = Column(String, nullable=False)
    product_price = Column(Float, nullable=False)
    stock_quantity = Column(Integer)
    category_id = Column(Integer, ForeignKey("categories.category_id"))


class Customers(Base):
    __tablename__ = "customers"

    customer_id = Column(Integer, primary_key=True)
    customer_name = Column(String, nullable=False)
    customer_email = Column(String, unique=True, nullable=False)


class Orders(Base):
    __tablename__ = "orders"

    order_id = Column(Integer, primary_key=True)
    order_date = Column(Date)
    customer_id = Column(Integer, ForeignKey("customers.customer_id"))


class Discounts(Base):
    __tablename__ = "discounts"

    discount_id = Column(Integer, primary_key=True)
    discount_amount = Column(Float)
    product_id = Column(Integer, ForeignKey("products.product_id"))


class OrderDetails(Base):
    __tablename__ = "order_details"

    order_details_id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("orders.order_id"))
    product_id = Column(Integer, ForeignKey("products.product_id"))
    quantity = Column(Integer)


class Reviews(Base):
    __tablename__ = "reviews"

    review_id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey("products.product_id"))
    customer_id = Column(Integer, ForeignKey("customers.customer_id"))
    rating = Column(Float)
    comment = Column(String)


class Shipping(Base):
    __tablename__ = "shipping"

    shipping_id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("orders.order_id"))
    ship_date = Column(Date)
    delivery_date = Column(Date)