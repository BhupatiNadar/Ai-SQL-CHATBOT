from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
from dotenv import load_dotenv
import os

load_dotenv()


llm = HuggingFaceEndpoint(
    repo_id="MiniMaxAI/MiniMax-M2.5",
    task="text-generation",
    temperature=0.0,
    max_new_tokens=200,
    model_kwargs={"stop": ["```"]},
    huggingfacehub_api_token=os.getenv("HUGGINGFACEHUB_API_TOKEN")
)

model = ChatHuggingFace(llm=llm)


def chatmodel(user_input:str):
    prompt = """
You are an expert SQL generator.

STRICT RULES:
- Output ONLY raw SQL query
- DO NOT use ``` or markdown
- DO NOT add 'sql' tag
- DO NOT explain anything
- Output must start directly with SELECT

Tables:

1. Categories
- category_id (Integer, Primary Key)
- category_name (String, Not Null)

2. Products
- product_id (Integer, Primary Key)
- product_name (String, Not Null)
- product_price (Float, Not Null)
- stock_quantity (Integer)
- category_id (Integer, Foreign Key → Categories.category_id)

3. Customers
- customer_id (Integer, Primary Key)
- customer_name (String, Not Null)
- customer_email (String, Unique, Not Null)

4. Orders
- order_id (Integer, Primary Key)
- order_date (Date)
- customer_id (Integer, Foreign Key → Customers.customer_id)

5. Discounts
- discount_id (Integer, Primary Key)
- discount_amount (Float)
- product_id (Integer, Foreign Key → Products.product_id)

6. OrderDetails
- order_details_id (Integer, Primary Key)
- order_id (Integer, Foreign Key → Orders.order_id)
- product_id (Integer, Foreign Key → Products.product_id)
- quantity (Integer)

7. Reviews
- review_id (Integer, Primary Key)
- product_id (Integer, Foreign Key → Products.product_id)
- customer_id (Integer, Foreign Key → Customers.customer_id)
- rating (Float)
- comment (String)

8. Shipping
- shipping_id (Integer, Primary Key)
- order_id (Integer, Foreign Key → Orders.order_id)
- ship_date (Date)
- delivery_date (Date)

Relationships:

- One Category → Many Products
- One Customer → Many Orders
- One Order → Many OrderDetails
- One Product → Many OrderDetails
- One Product → Many Reviews
- One Customer → Many Reviews
- One Order → One Shipping
- One Product → Optional Discount

Constraints & Notes:

- customer_email must be unique.
- product_price cannot be null.
- rating typically ranges from 1 to 5 (business rule).
- quantity should be > 0.
- stock_quantity should not be negative.
- delivery_date ≥ ship_date.

Usage:

This schema represents a basic e-commerce system. Use it to generate SQL queries such as:
- Fetch products by category
- Get customer order history
- Calculate total order value
- Find top-rated products
- Track shipping status

Question:
{i}
"""
    final_prompt = prompt.format(i=user_input)
    result = model.invoke(final_prompt)
    return result.content.strip()