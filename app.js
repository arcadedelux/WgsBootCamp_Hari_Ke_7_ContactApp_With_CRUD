const yargs =require('yargs')
const {saveData,listContacts, detailContact,deleteContact} = require('./contact')

// console.log(yargs.argv)

//Inisiasi Command Input Dari Terminal Menggunakan Library Yargs
//Membuat Command Yargs Untuk Menambah List Data Di contacts.json
yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{
        name:{
            describe:'Contact Name',
            demandOption:true,
            type:'string'
        },
        mobile:{ 
            describe:'Contact mobile number',
            demandOption:true,
            type:'string'
        },
        email:{ 
            describe:'Contact Email',
            demandOption:false,
            type:'string'
        },
        
    },
    handler(argv){
       saveData(argv.name,argv.mobile,argv.email)
        // const contact ={
        //     name:argv.name,
        //     email:argv.email,
        //     mobile:argv.mobile
        // }
        // console.log(contact)
    },
})

//Membuat Command Yargs Untuk Menampilkan List Data Nama Dan Nomer Telpon Di contacts.json
yargs.command({
    command:'list',
    describe:'see contact list',
    handler(){
        listContacts()
    }
})

//Membuat Command Yargs Untuk Menampilkan Seluruh Data Bedasarkan Nama Di contacts.json
yargs.command({
    command:'detail',
    describe:'see detail contact data',
    builder:{
        name :{
                describe:'Contact Name',
                demandOption:true,
                type:'string'
            }
    },
    handler(argv){
        detailContact(argv.name)
    }
})

//Membuat Command Yargs Untuk Delete List Data Bedasarkan Input Nama Di contacts.json
yargs.command({
    command:'delete',
    describe:'deleting contact',
    builder:{
        name :{
                describe:'Contact Name',
                demandOption:true,
                type:'string'
            }
    },
    handler(argv){
        deleteContact(argv.name)
    }
})
yargs.parse()

//Membuat fungsi asychoronus memanggil fungsi tanya readline name,phone dan email serta memasukan data ke contact.json
// const run = async () => {
//     const name =  await questions('Whats is your name?')
//     const phone =  await questions('Whats is your mobile phone number?')
//     const email=  await questions('Whats is your email address?')

//     saveData(name,phone,email)
// }

// run()

//Node readline module input dan fungsi menyimpan data input ke contacts.json (Input Diterminal Menggunakan Node Module Readline)
// rl.question('Whats is your name?',(name)=>{
//     rl.question('Your Mobile Phone Number',(phone)=>{
//         const contact ={name,phone}
//         const file = fs.readFileSync('data/contacts.json','utf-8')
//         const contacts=JSON.parse(file)
//         contacts.push(contact)
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//         console.log('terimakasih sudah menginput data!')
//         rl.close()
//     })
// })