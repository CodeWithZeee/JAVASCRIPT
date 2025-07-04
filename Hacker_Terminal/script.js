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

        async function main() {
            let t = setInterval(() => {
                let last = document.body.getElementsByTagName("div");
                last = last[last.length - 1]
                if(last.innerHTML.endsWith("...")){
                    last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
                }
                else{

                    last.innerHTML = last.innerHTML + "."
                }

            }, 100);
            // This will add a blinking effect to the last item in the body

            let text = ["Initialized Hacking now reading your data",
                "Reading your Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning up"]

            for (const item of text) {
                await addItem(item)
            }

            await randomDelay()
            clearInterval(t)
            
        }
        main()
