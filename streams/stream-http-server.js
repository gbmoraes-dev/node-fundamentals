import http from 'node:http'

const server = http.createServer(async (request, response) => {
	const buffers = []

	for await (const chunk of request) {
		buffers.push(chunk)
	}

	const body = Buffer.concat(buffers).toString()

	console.log(body)

	return response.end(body)
})

server.listen(3334)
