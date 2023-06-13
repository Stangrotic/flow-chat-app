from api import urls

from django.http import JsonResponse
import openai
import requests

openai.api_key = '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'

def generate_query(user_input):
    response = openai.Completion.create(
      engine="text-davinci-003",
      prompt=user_input,
      max_tokens=60
    )
    query = response.choices[0].text.strip()
    return query

def fetch_data(query):
    response = requests.get(f'access.mainnet.nodes.onflow.org:9000 {query}')
    data = response.json()
    return data

def generate_response(data):
    prompt = f"The data is: {data}"
    response = openai.Completion.create(
      engine="text-davinci-003",
      prompt=prompt,
      max_tokens=60
    )
    text = response.choices[0].text.strip()
    return text

def chat(request):
    user_input = request.GET.get('input', '')
    query = generate_query(user_input)
    data = fetch_data(query)
    response_text = generate_response(data)
    return JsonResponse({'response': response_text})

from django.http import HttpResponse
from django.views import View

class HomeView(View):
    def get(self, request):
        return HttpResponse('Hello, World!')
