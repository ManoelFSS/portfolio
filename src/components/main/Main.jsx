import React, {useState} from 'react'
import {Mains,Conteiner_left, Conteiner_right, Button, Article, Span, Container_Nave, Container_redeSociais, Area_btn, Area_title} from './styled'
import nave from '../assets/nave.png'
import MF from '../assets/Manoel.jpg'

export default function Main(){

const [modal, setModal] = useState('0')
const [naveMargin, setnaveMargin] = useState('90px')
const [topBotton, setTopBotton]= useState('0px')
const [naveRotate, setnaveRotate]= useState('rotate(0deg)')

    return (
        <Mains>
            <section>
                <Conteiner_left>
                    <div>
                        <Area_title>
                            <h1>OLÁ, SOU O<br/><span>MANOEL FERNANDO</span><span>:)</span></h1>
                            <p>Desenvolvedor   Front-End</p>
                        </Area_title>
                        <Area_btn>
                            <a>DOWLOADR  CV</a>
                            <Button >
                                CONTATO
                            </Button>
                        </Area_btn>
                    </div>
                    <Container_redeSociais>
                        <a href=""><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEBUQEBIVFhUVFRUVFRUWFRUVFRUVFRYWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0eHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABNEAABAwECCQULCAkEAgMAAAABAAIDEQQhBQYHEjFBUWFxEyJUgaEyUnJzkZKTsbLR0hQXIzRCU6LBFiQzRGKCg7PDQ8Li8KPxFSVj/8QAGwEAAgMBAQEAAAAAAAAAAAAABAUCAwYAAQf/xAA8EQABAgMDCAcHAwQDAAAAAAABAAIDBBEFITESQVFxgZGh0RQiUmGxwfAGExUyM0LhcoKyIyRDUzRiov/aAAwDAQACEQMRAD8A3FBBBcuQSM8zGNL3uDWtFS5xAAG0k6FEYyYxwWOPOk5zndxGDznbz3rRrPrNyyXDmMNptb86V3NB5rG3NbwGs7zf6lJrao6Us+JMDKwbp06h6Cv+GModnZVtnYZTozjzI+om93kAO1VO3Y72+X/VEY72MZv4jV3aqyCjBFw2MGZNmSMGHgK67/xwT2XCU7+7mld4Uj3espDPO1JhdBRbCBgFzoYGASocdqMHHakgUYFEtchnsShJRSSgEFcqFwk7UQkpSiLRe0XIhJXCSjEIpXlFy4SUUkrpC4QuouRalcJKMQuFeUXiTqdqXit07O4lkb4L3t9RSJCKQvC0HELlPWDHTCMVKTl472UCQHi487tVtwNlNjdRtqiLP/0jq5vEs7oDhnLMyEUhUxJWE/EbrvxwVboTHZl6IsFtimYJIXtew6HNII4XaDuTpeesEYWtFlk5SzvLDrGlrhse3Q4do1UWuYo43w20ZjgI5wKujrc4DS6M6xu0jtKuYlHQhlC8esUNEglt4vCtKCCCEVKCCCC5cgoLGrD8djg5R173VEbO+dSt+xouqd4GkhS1onaxjpHkNa0FznHQGtFST1LCsaMNvtdpdMahvcsafssGgcTr3ngoudRM7MkOlRDlfK3Hv0Dbn7u+iaW+3SzyOmlcXOJqSewAagNQSAKKCugqTXLWOhgCgwRwUYFJgp3g6wyzyCKFjnuOobNpOho3m5EtchojQBUpIFHAvprOgbVouA8nTAA61uznd4wkNG5z9J6qdauWD8F2eAUhiYze1oBPF2k9al0gDC9JY1owmmjOtwHrYsYhwLbH9zZpjv5J9PLSiXGLtu6NN5jltyC9E44ZggXT7j9o4rExi9bujTejK6MXrd0aXzCtrQUxaDxmHFQM245hxWKfo7bujS+YVw4u27o0vmFbYgp/En9kcVDpLtAWJHFy3dGl8wopxct3RpvMK29BefEXdkcV3SToCw79G7d0WbzCuHFu3dFm8wrckF3xF3ZHFd0l2gLC/wBG7f0WbzCiuxct4/dZvRuPqC3ZBd8Rf2RxXdJdoC892qxSx/tY3s8Njme0E3XolzARQio2FV7C2JlgnqeSEbu/iow12lvcnrCsZaLfvbTUpiZGcLFCFwhWrGPEq02UGRv0kQvL2A5zR/GzUN4qNtFVkeyI14q01CvDg4VCJRdilcxwexxa5pBa4GhaRoIK6QilSXq2fEfGkWyMskoJ4wM8aA9ujlGjZtGoneFa153wXhCSzzMniNHMNRsI1tduIqFvWCcIR2mFk8fcvbUbQdDmneCCDwSWclxCdlNwPAoKNDyTUYJ8gggg1SqJlUwvydmbZ2mjpjf4DaEjrNOoFZKCrPlLt5lt726o2iNvEAl34nP8iqwQTn1eV9AsqV9zJsGcjKO2/wAKJQFGBSYKd4Nsck8rIoxVz3ZrRq2kncACTuCta5EPAAqbgpLFrAM1smzGXNFC95FWtafWTQ0GumwEjY8CYFgssfJwtp3zje952vOvhoGqiGL+B47JA2GPVe52tzzSrj/24ADUn1qtLImOkkcGsaCXONwACIWIn590y/JbUMzDT3ny0Dvql1A4WxqsVnq2SUFw0sZznA7DS5p8IhUDGrHqWcmOzl0cWioue8X3uOpv8Iv2m+gqIKm1tcUTAshxGVGNO4Y7Thsv1grSrTlMj/07O9w/jeGnyNDvWm/zmv6MPSH4FnwKMCiWw2aPFEmz4A+3iea0EZTH9GHpD8C785bujD0h+BZ+ugq5sCEft4nmqXSUHs8TzWgfOU7ow9IfgXfnJf0YelPwKgAowKubLQezxPNUOlYQzcTzV++ch/Rm+lPwLnzkv6M30p+BUQLtFcJOB2eJ5qkwWDMrz85T+jN9KfgXPnLf0ZvpT8CoxCKQu6FA7PE813uWaFevnNf0ZvpT8C63Kaa32UdUx+BUIhFK7oUDs8TzXnuWaFqVgyiWN5pK2SLeRnN8rb+xWqx2yKVmfE9r2nW0gjhdr3LASE6wdhGazv5SB5Y7XTQ4bHDQ4biqIlntN7DQ8Oag6XH2rfVn2OmIzXh09kbR95fEND9roxqdu0HjpmMUcbY7YOTeAyYCpb9l4GlzK9o0jfpVpS8OiS8TQeBQwLobu9ecCFwrQspWLQYflsI5riBM0aA43CTrNx3kHWVnxCdwooisDgjmPDhUIhWi5JcK0dJY3G4jlY9xFGyDr5ppucs8IUlizbOQtsEuoSNDvBfzH/hcVGYh+8hlvq5eRG5TSFvyCCCz6XrztjHMH2yd4+1K93leSo8JS3n6R3hH1lIgpO16+rth0Y0dwSgWoZJsCgMfbHi9xLI696O7cOJoP5TtWXt0gbwvQ2A7CILNDCAOYxoO92l563ElGwLzVZ32ijmFLiGMXngLzxpsqpFZDlFxkM8ps0R+ijdRxGh8g0k7QDcN9TspoeN2FDZrHLKDR1M1m5zrgerT1LB61NdqIc6lyV2HJh5Md2a4a852DDXXEJQFdCICugqbXJ+5qUBRgUmCjAolrkM9iVC6kwUcFENchnNRgUYFEXQUQ1yGc1KAowSYKMCiGuQrmo5C4UAV0hXqkiiIQilKEK25OsCxzyPmlaHNizc1pvBe6pqRroB27lXFiCGwvOZQe4NFSqp8hmzc/kpMylc7Mdm0251KUTVeh1mGUnAkcTmWiJoaJCWvaLhn0qHAbSM6vDeUJAnREfkEUrgqocfKNCFSYZnsc17HFrmkOa4aQRoIW04p4bFrs4kuD282Ro1PGsbiLxxpqWKEK0ZOsJGG2CMnmTDMOzOFTGfLVv8AOpzsERIZdnF/4XsZmU2ucLWLXZmSxuikFWvaWuG0EUKwTC+D3WeeSB+mNxbXaNLXdbSD1r0EstyrWENninH+owtPhRkXneQ8D+VAyETJeWafL8VVMu6jqaVQiFxwuKOQi0TkIxa9+lh2+pBZ3yjtp8pQSfozUD7oKu24/SO8I/mkgU4wi36R3hH1lNQsgHXr6wwVYFLYtxB9rgYdBmjaeuQBeiF55xQ+v2bx8X9xi9DJpJmoKxXtTdGhjuPis+yv2qlngi7+RzvMbm/5FlYK0jLP+6/1/VEs1BXPd1z6zJnYsMCRhnTU/wDojySgKMCkwUYFWNcjXNRwUYFEBRgUQ1yGc1HBRgURo7bus6FdMX8n9olAktB5FhvzaVlI8E3M66nciA8DFAzERkFuU8089SqFUtBC9/cNc7wWl3qWx4MxSsMFM2FrnD7cgEjq7RW5vUAp1jABQCg2KXSaYBJYlpsr1G7zTwr4rBjg20DTDKOMb/ckDcaG47DcfIvQSb2uyRSDNlYx42OaHDyFTbOkYhUdPri3isGBRgVqOFcQ7JICYawu/h5zK72E3dRCoWG8XrTZD9K2rCaCRt7DsBP2TuPVVHQJpj7hirGxWRLgb9BUWVasQcOR2eR8cxDWS5vPOhr21pnHUCDp1UG9VUFAomIwRWFpzqL2AihW+coKZ1RSla1uptqsvyhYejtD2QQuDmRkuc8Xtc8igDTrAFb9ddyqZcaUrds1eRFKFgSIhvyia8PNUsgBprWqTIStjn5ORkvePa/zXB35IhCJIOaeBR1K3FXr0MqPlWirZIn62zAdTmPr2gK8KnZUvqTfHM9l6z0r9ZutLoXzhZKi0RyFwhaBMVK0XV1BBIZQ1uZzzxP5pi9ilbYznnj+aZSMXz4OvK+mwn9UJ5if9fs3j4/7jF6HXnvFNv8A9hZvHx/3GL0InEh8p1rI+1X1of6fNZllo0WX+v6o1mYK0zLTosnGb1RrMQVCMaRXeswTqwxWz4X7v5OSlUYFJhGCk1yOc1KApazwue4MY0uc4hrWi8knQAm4K1fJpi2Ioxa5R9JIPowfssP2txd7NNpRLDVK7QmWysIxHX5gNJ9XlP8AE7E6OygSzAPnN9dIj3M37XeSg029BUXHLHdsBMFlo6UXOeb2xnYB9p/YNdbwr1jA2POxu047gPIeryVbMI4TggbnTyMYNWcbz4LdLjwVZtWUaxNNGNlk3hoa38ZB7FlVptUkjzJK5z3HS5xJJ3VOrdoRAVa1oOKbsseG0dclx3DmtQZlKg1wSU3OYT5LlKYOx4sEpAL3RE6pW5o63Alo6ysdBRwrRBYVGJZkE4VG1eg4pA4BzSCDeCDUEbQUWeJr2lj2hzXChaQCCDqIOlYrgLGG02V1Ync2vOY69jtt32TvHboWsYvYdhtcXKR3OFA9h7phO3aDfQ6+NQKokIsvxCUzEo+DfiNPNUPHDFQ2es0AJiJ5zbyYid+tm/VrVUC3uWMOBa4Agggg3gg3EEawsfxuwGbLaM1teSfV0Z2D7TCdrajqITGTmi7qOx8fXrvtgRcvqux8VClcQBXSmINVcRREIRJBzTwKVKTkFx4FSGK8XoNU/Kj9Sb45nsvVwVPyofUm+OZ7L1nZX6zNaXQvnCychFojkLlFoAmKlEEaiCCQyZ2tnOdx/NNHsUpamc53X60ykYvmxd1ivoUJ9wSuKzP1+z+Pi/uMW+rCcWmfrtn8dD/cat2T2zDVjtazHtMaxYf6T4rMcteiy8ZvVGsxBWnZaxdZeM/qjWXqmZNIztngForAFbPh/u/k5HBRgUQFGBXjXJm5qnMUME/KrXHEe5rnSeALzw2cSFvcbQBQCgFwGxZnkdsV885GpsbTx5zvZYtPTKXHVrpWB9oI+XNe7zMFNpvPkNiqWP8AjD8kgzYzSWWrWHvBdnO43gDea6iscztan8oGEjNb5b+bGeTb/TqD+LOPWq6CvcupTuzZMQJdvadeduA2C7XVHBRgUQFdBVzXIhzUoCjApMFGBRLXIZ7EoFJYCwtJZp2yx6rnN1PYe6afyOogKLBRgVeCMChYkMOBBwXoCx2lksbZYzVr2hzTuIqFD454L+UWR4Aq9g5Rm3OaDVo4io61D5LreX2d8BP7JwLfAfU084PPWrwgzWG+7MsxEaYMUgZj+RwXn4FGBTvDlk5G0zRC4MkcGj+GtW/hITIFPWPqKhNSKioRyiSC48CjArkmg8Cr24qmlF6AVQyn/Um+OZ7L1b1UMp31Jvjmey9Z6V+szWlsL5xrWUlFIShCKtAmKlEF1BBIeqPaWc49frTORilLUznHifWmkjF8uLusda28J9wXcXGfrln8dF7bVt6xfADP1yDx0fttW0LRWSaw3a/ILO+0JrEh6j4rNMsuiy/1/VEsvexaplfbX5N/W/xLM5GIebd/Xds8AtJYLqSEP938nJojVXXsRAoNcnmK2XJF9Rf49w8kcSvKoWSGUGxyN1iYu85jAPZKvqdS98NupfL7YBE9GH/ZebbTOXyOedJdU8S4k+tEBTjC1l5GeWL7uR7fI4j8k1CFY5fQCGkAtwzakoCjApMFGBRDXIdzUoCuhEBRgUQ1yGc1HBRgUmjAolrkM9ivGSmU/KpG6jAT1tfGB7RWqLL8k8FZ5pO9jDPOdX/GtQVUX5llrS/5BHcPBY5j82mEZt/Jn/xM9yr4Kmsepc7CMxGpzG+axgPaCoMFMoLuoNQTKGz+m3UPAJQFdcbjwKICuuNx4FGMdeq3MXoJVHKb9Tb45nsvVuVRymfU2+OZ7L0klfrM1pNC+ca1lhRSEoQikLQpipOi6uriBVKkLQznHifWmj2KUtDLz1pnIxfJi7rHWtVCfcEMBM/W4PGxe2FsCybArP1qDxsfthaytNYprCdr8gklumr2aj4rPcrLaiz/ANb/ABLN5GLTMqba/J/6v+NZ3IxCTzv7l2zwC0NivpJQx+r+TlHSMTd7FIyMTaRira5PGPV1yP4Qay0SWcn9q2rd74qkAfyl56lry84YKtj7PPHMzSxwI30N4O6lR1r0Fgy3RzwsmjPMe0OG7aDvBqDvCdSMTKbkaPBYv2mlSyOI4wcKHWOYpTaspyqYIMVqFoA5swqdgkADSOsZp/m3Kkgr0FjFgaO2Wd0L7q3tOnNeK5ru2hGsEhYRhbBk1mldDK3NcD1EaiDrB2qMdhY6uYptYU82YlxCJ67BTWMx2CgO/OmwRgUmCjArmuTZzUoCjApMFGBRDXIdzEoCu1RAVbsQ8V3WqUSyg8gw69EjhoYNo749Wu4hrkBMxGQWF7zcPVB3lXjJ5gswWMOcKOmPKkHSGkAMHmitNrirLaJmsY57jRrQXOOwAVJ8gSypWUrDQis4szTz5u63RA86vhHm7xnbF6OsVjQHTUfvcd34AWZ221GWV8rtL3ucRsLnF1O1JJMFGBTBrlpXMGZHBXXHTwKKEHG7qKJY69Dll69DKpZTPqbfHM9l6tqqGUz6m3xzPZelct9ZmtZ2De9qzAopC6CgVogapiRRSSCMgglQp+dl54lNJGKUtDLzxKZyMXxxzusdZT+E+4IuBmfrMPjGe2FqKzTBbf1mLdJH7YWlrWWCawX/AKvIJVbBq9mo+KomU1tfk/8AV/xqgyMWi5RoqiB2wyDy5h/2lUKRiBtI0mn7P4hPbHf/AGjBr/kVHSMTeRikZGJtIxUNcnTHqPkYrlk6xq+Tu+TTupFIatJ0RuOsnU03V2G/aqrIxN5GIyDGcx2U1SmJeHNQjCiYHeDpHePwbl6SUNjBi9Z7ZHmTNvFc17e7bXYdm43LOsS8ezZw2z2rOdGLmvF7mDZTW0bNOytwWqWO1xysEkT2vadDmkEHr27k+hRWR2+IWAm5OZs6MDeOy4Z+R0jxF5xvDuIVss5JY0ys1GMEmm+PSO0X6VVi1wN4IIuIIoQdhC9LpparBBL+1ijf4bGv9YUDK9kprL+0sQCkdmV3g0O6hG6i86UOwpzYbDNM7Mije92xrHGnGmgbyt6GArF0WAHbyMfuT+KJrRmtAA2AADyBSbBOcqcX2kYR1IRr3nyAv3hZpi3k5eSJLaaDTyQNXHc5wuaNzam/SFpFns7I2BkbQ1rQA1rRQADQAAl1BYxYyWextrI6rje2NtM87yPst3nt0K8ANCRRpiYnogB6xzAYbB5mp0lOsOYWissLppTcLmt+09x0MaNZPZeTcFiOGMJy2md80hvcbhqDR3IbuA/M60rjDh+e2S8pKeaKhjB3LGnUBrJ1nXwAAiwV61160MhZwlm1de849w0DzOfDDFQFHBSSMCiWuRL2JQFBxu6iigo7WFxzRpNw4m4IhjqFDlt69DBVDKb9Sb45nsvVwVNynvpY2DbO0fgkP5IOB9RutZaWFYrdazAFHqkgUaqeMcmzmqXQXKoKiqCyVb52XniU1exSdtio9w2OI9aavavi8TqxHNOYnxomkN9wTAgghw0g1HEXrR4ZA5ocNDgCOBFQs+exW3Fq1Z8OadMZzeo3tPrHUtF7PRwIj4RzgEbPweCFtJuUxrxm80jjjY+UspI0xuD+q8O7DXqWbSMWySsDgWuFQQQRtBuIWY4bwY6CV0Z0aWnvmnQeOriEVbUAhzYwwwPlvRFjTIyTCOa8efrWoB7EhIxSD2JvIxJ2OWjY9RsjE3kYpGRibPYiWuRbHqPkYnWCsN2qynOhlLa6QL2ni03FFexN5GIqHEINQiOrEaWuFQcxvC0TBWVTQ21QcXxmnDmO+JWGzZQcGOFTK5m57HV/ACFiL2IlEeyciDvSuN7OSMQ1aCzUeYK3g494LF/ylvUyQ9gYmFsyk4PZczlJD/C0AdZcQewrGAV0FX9LeVQPZmTaakuOsjyaFesM5SLVKC2FohadBbzpPOIu6m13qnSSuc4ucS4k1LiSXE7STeSkAUYFSEQnFHwpODLtyYTQ3VjvN53pQFGBSYKMCr2uXj2pQFdCICugohrkK5qUBU5ibYTPbom0uDxI7c2Pn37iQB/MoGq1bJpgMxQm0yNo+YAMB0ti0jzjQ8A1XZdAldoRBBgk5zcNqvCzzKta/wBhCP45Du0Nb63+RaGsSxxwmLRbJHtNWMPJt8FlRUbi7OPWugDr10JDZ8Ivi10Cvrx2KHBR6pKqNW5M2OThzFN8m7vT5CgtA/Rc7uxcQfSQkvv2pTDMObKT31D7/wA1GuarLhuz5zA8aW+oqvuC+X2zAMCcfod1htx41RctEymDuu9bE2e1LYLtZilD/snuhuOviNKK5qTe1BwI7oTxEZiLx68UXc9pacCr0xwIBBqDeDtBUfhvBbLRHmm5wva7Ydh3FROBMKZn0Uh5v2Xd6dh3er1WlfQpaYgz0CovBuI0d3I7Qkr2RJeICDQjA+uIWT4QsEkTyyRtCPIRtrrCj5GLXbfYYpm5krQ4atoO0HUqnhHE14vgeHDvX3O8ouPYkkzZEWGawus3iOey/uT6UtaG4Ui9U8Pxt3qiyMSEjFYbTi9a26YX/wArc/tbVM34EtX3Evon+5BiFFGLSNh5J1DmYZFQ4HaOagZGJtIxWB+AbX0ab0b/AHJF+L9s6PN6OT3K9rH9k7ijGR2dobwq7IxNnsVjfi7bejT+ik+FIvxZt3RpvQye5Xta7QdyKbMQ+0N45qvo4KlXYs27os3opPcuDFfCPRZvRSfCiGh2g7laZiF2xvCjAV0FSf6M2/os/opPcujFq39Fn9FJ8KubXQqnRYR+9u8KNBRgVI/o3b+iz+il+FdZi5hCtPk0/opPXmolpKHdEh9obxzUeCjVVmwbiBhCW90bYh3zyB2CrvKArzi/iBZbOQ+X6Z4vGcOY07Q2+p3kncAiWVKUzdpysEfNlHQ2h44DfsVaxHxMdMW2i0giEXtYRQy6xUame1wWroKFxjw9DY4uUkNXGoYwHnPd+Q2nVxoDcsnMTEWcii6/AAZvWcqMx+w+LNZ+SjP00wLW00tboc/dsG811FZGEthXCUtomdNK6rieoDUGjU0f9vqU2BV8M0WglZMS8PJxJxPrMMyUBUrixZOWtkEeovaT4LOe7saR1qIBWiZLMFH6S1OF37KPfoLz7Ir4Suc/JaSqpt3u4TnbtZw5rRkEEEEswiPaCCDrVZttmMbyDo1HarSm1sswkbQ6dR2JTa9ndMg9X52/L5jb491VfAi+7dfgqo5qTc1PJoXNJa4UITdzV8/ILDkuuIxCbNdVNnsT3BuF3xc13OZs73gfy9SbuaknsRMrNRJd4fDND6uOkKxzWxG5LhUK5WO3Ryisbgdo0EcQnazsgg1BII0EXHyp7Dh60suzg4bHivaKHtWrlfaBjhSM2h0i8bsRxQMSzXYwzvV3QVSbje4d1CDweR2ZpQOOjfuD5/8AxTFtrShwfwdyVPw6Z7PEc1bUFTnY8gfu59J/xSZx9b0c+kHwqYtKVP38DyUxZU2fs4t5q6oKjnKEz7h3pB8KI7KOwfu7vSD4VPp8v2/FSFjzh/x8W81e0Fn5ymM6M70g+FEdlQjH7s70g+Fe9NgdpS+CT3+vi3mtDQWcnKpF0Z/nj4UT514uiv8ASD4VLpULtKQsG0D/AIuLea0lBZx868XRn+kHwpOTKwz7NkceMoH+wr3pMLT4rvgVof6uLea0tEe4AVNwGkrKLXlStDrooY2Da6rz1XtHYqthTGK2Wn9tM5w70UDfNFB2LukNzImD7OzTvqEMG87hdxC03GPH+zwgss5EsmjOF8TTvcO64N8oWXYRwhNaJDLK8uc7WdQ1NaNAaNgTEFGBXCISn0rZsGVHUFTnJx/A1bSUcFGRAUtZoXvc2NjS55NGtAqSdgCva5Te1O8EYPktMzIYhe40rpDR9ou3AX9mtbnguwxwQshjFGsbQbTtJ3k1J3lQmJmLTbFFnPoZngZ7hoaNPJt3DWdZ6gLQpudVZC0ZsR35LPlHE6eXoIIIIKCXIIIILlybWuytkFDp1HYq/a7G+M84XaiNatKI5oIoRUb0ptGyIM51vlf2h5jOOI05lfCjuh3YhU5wSTmqy2nBDHXsOafL/wClGz4JlGgZ3X771ko9jTkD7coaW38MeCYQ5mG7PTWoh7U2kYpOSySDSwjiE3fA7YUJ7qI24tI2HkjGRRmKjJGJvIxSj7O7YU3ksru9PkV7WP0HcUUyKNKipGJvIxSr7K/vXeQpu+xv7x3kKIa1+g7ii2RRpUTIxN5GKWfYn947yFN32KTvHeQohrX6DuRbIo0qIkYmz2KYksMveO8h9ybvwfL927zXe5EtDtB3IpkZulQ8jE2exTT8HTfdv80+5N34Nm+7d5p9yIbXQdyLZGbpUUjAp2/Bc/3cnmn3IowXaPupPNPuVzaq73jNI3hNwUYFOP8A4yf7uTzT7k4gwFbHdxZ5XeDHIfUiGFUvewfcN4TEFdBVlwdiDhGXTHyY76Q5v4KF3YrjgXJnZ2UdapDK7vW1YzgT3TuxFw2uOZKJm1JOCL3gnQ3rHhdvKz3AmA7Ra35kDCe+cbmt3uOgcPICtdxUxUhsbc7upSKOkI0DvWd63tOvUBO2WyxxMDImNY0aGtAaB1BOEW1tMVk5+1Ykz1GjJZoznWfIXZ7yggggpJUgggguXL//2Q==" alt="instagram" /></a> 
                        <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XE8TsonH3oNXlqLJVPb6ezXvhTHqyJegOg&usqp=CAU" alt="facebook" /></a>
                        <a href=""><img src="data:image/png;base64,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" alt="githube" /></a>
                        <a href=""><img src="data:image/png;base64,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" alt="linkedin" /></a>
                        <a href=""><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2zSe2fjGiyVR0aahdnNdVD6sntUG0bzis1o-qeVAlFsvdYxNh" alt="whatsapp" /></a>
                    </Container_redeSociais>
                </Conteiner_left>
                <Conteiner_right>
                    <img src={MF} alt="Manoel" />
                </Conteiner_right>
            </section>
            <Article modal={modal}>
           
            </Article>
            <Container_Nave naveMargin={naveMargin} >
                <Span 
                    topBotton={topBotton}
                    nave={nave}
                    naveRotate={naveRotate}
                    onClick={()=> modal === '0' ? `${setnaveMargin('calc(100vh - 8vh)')} ${setnaveRotate('rotate(180deg)')}   ${ setModal('calc(100vh - 8vh)')}` :
                    ` ${setnaveRotate('rotate(0deg)')}  ${setModal('0')} ${setnaveMargin('90px')}`}
                >
                </Span> 
                <h3>Sobre min</h3>
            </Container_Nave>
        </Mains>
    )
}