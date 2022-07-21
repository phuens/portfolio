import flask
import requests

app = flask.Flask(__name__)


@app.route('/', methods=['GET'])
def home():
	response = api_call()
	return response


def api_call():
	database_url = "https://api.notion.com/v1/databases/e92cb4ff8161401e8dd93ee785e2f929/query"

	token = ""
	headers = {
		"Authorization": f"Bearer {token}",
		"Accept": "application/json",
		"Notion-Version": "2022-06-28"
	}

	response = requests.post(database_url, headers=headers)
	response = response.json()
	result = response['results']

	column_headers = []
	# return response
	book_database = []
	for item in result:
		info = {}
		for properties in item['properties']:
			column_headers.append(properties)
			url = "https://api.notion.com/v1/pages/" + \
				item['id'] + "/properties/"+item['properties'][properties]['id']
			value = requests.get(url, headers=headers)
			info[properties] = value.json()
		book_database.append(info)
		break

	# print(column_headers)
	print(book_database[0])
	data = format_data(book_database)
	
	return "hello world"

def format_data(book_database): 
	''' convert data to key value dictionary only needed values. '''
	'@param book_database:    json format data returned by notion api. '
	'@return formatted_data:  final data with only desired key value dictionary.'
	
	data = []
	for item in book_database: 
		info = {}
		for columns in item: 
			if 'results' in item[columns]:
				pass
				# print(columns)
			
			else:
				col_type  = item[columns]['type']
				if type(item[columns][col_type]) == dict: 
					print(col_type)
					if col_type != 'date':
						info[columns] = item[columns][col_type]['name']
					else: 
						info[columns] = item[columns][col_type]['start']

					
		data.append(info)
		print(info)
				  



	return 'yoyo '



if __name__ == '__main__':
	app.run(debug=True)