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

Table schema:
children(child_id, name, father_name)

Question:
{i}
"""
    final_prompt = prompt.format(i=user_input)
    result = model.invoke(final_prompt)
    return result.content.strip()