/*
Write a Javascript program to pretend to look like a hacker 
Write an async function which will display the following output :

Initializing Hack Program ...
Hacking Ashish's Username ...
Username found aashish17 ...
Connecting to facebook ...

Try to use HTML & styling if possible
*/


        const addItem = async (item) => {
            await randomDelay();
            let div = document.createElement("div");
            div.innerHTML = item;
            document.body.append(div)
        }
        // This function will add a new item to the body after a random delay

        const randomDelay = () => {
            return new Promise((resolve, reject) => {
                timeout = 1 + 6 * Math.random();
                setTimeout(() => {
                    resolve()
                }, timeout * 1000);
            })
        }
        // This function will return a promise that resolves after a random delay between 1 and 7 seconds


        // The main function will call the addItem function for each item in the text array
        // and will also add a blinking effect to the last item in the body
        async function main() {
            let text =  ["Initializing Hack Program ...",
            "Hacking Ashish's Username ...",
            "Username found aashish17 ...",
            "Connecting to facebook ..."];

            for (const item of text) {
                await addItem(item) 
            }

            // await randomDelay()
            clearInterval(t) // This will stop the blinking effect for the last item in the body (i.e Cleaning up)
        }


        main()
