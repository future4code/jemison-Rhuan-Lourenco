const users =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type TypeUsers = {
    name: string,
    email: string,
    role: string
}

function searchAdmin(users : TypeUsers[]) : string[] {
    const adminUsers : TypeUsers[] = users.filter((atual) => {
        return atual.role === "admin"
    })
	return adminUsers.map((current) => {
		return current.email
	})
}