const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
myHeaders.append("x-api-key", "49f8e1e2-0bcd-43f5-a84e-c27e2afad5ad")

export const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
}
