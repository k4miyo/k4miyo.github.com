var store = [{
        "title": "Hack The Box Lame",
        "excerpt":"Máquina Lame Se procede con la fase de reconocimiento lanzando primeramente un ping a la dirección IP 10.10.10.3. ❯ ping -c 1 10.10.10.3 PING 10.10.10.3 (10.10.10.3) 56(84) bytes of data. 64 bytes from 10.10.10.3: icmp_seq=1 ttl=63 time=143 ms --- 10.10.10.3 ping statistics --- 1 packets transmitted, 1 received, 0% packet...","categories": ["Easy","Linux"],
        "tags": ["Injection","CMS Exploit"],
        "url": "http://localhost:4000/htb-lame/",
        "teaser":"http://localhost:4000/assets/images/htb-lame/lame.jpg"},{
        "title": "Función extractPorts",
        "excerpt":"extractPorts Herramienta desarrollada por s4vitar. Función a nivel de zsh o bashrc para extraer los puertos de un archivo grepeable, como una salida -oG de nmap; así como también representar la información más relevante de la captura. extractPorts # Extract nmap information function extractPorts(){ ports=\"$(cat $1 | grep -oP '\\d{1,5}/open'...","categories": ["Scripting","Tools"],
        "tags": ["Bash"],
        "url": "http://localhost:4000/extractPorts/",
        "teaser":"http://localhost:4000/assets/images/extractPorts/extractPorts.png"},{
        "title": "Hack The Box Legacy",
        "excerpt":"Legacy Se procede con la fase de reconocimiento lanzando primeramente un ping a la dirección IP 10.10.10.4. ❯ ping -c 1 10.10.10.4 PING 10.10.10.4 (10.10.10.4) 56(84) bytes of data. 64 bytes from 10.10.10.4: icmp_seq=1 ttl=127 time=145 ms --- 10.10.10.4 ping statistics --- 1 packets transmitted, 1 received, 0% packet loss,...","categories": ["Easy","Windows"],
        "tags": ["Windows","Injection"],
        "url": "http://localhost:4000/htb-legacy/",
        "teaser":"http://localhost:4000/assets/images/htb-legacy/legacy.jpg"},{
        "title": "Hack The Box Love",
        "excerpt":"Love Se procede con la fase de reconocimiento lanzando primeramente un ping a la dirección IP 10.10.10.239. ❯ ping -c 1 10.10.10.239 PING 10.10.10.239 (10.10.10.239) 56(84) bytes of data. 64 bytes from 10.10.10.239: icmp_seq=1 ttl=127 time=172 ms --- 10.10.10.239 ping statistics --- 1 packets transmitted, 1 received, 0% packet loss,...","categories": ["Easy","Windows"],
        "tags": ["Windows","CVE","SSRF","RCE","AppLocker Bypass"],
        "url": "http://localhost:4000/htb-love/",
        "teaser":"http://localhost:4000/assets/images/htb-love/love.jpg"},{
        "title": "Hack The Box Beep",
        "excerpt":"Beep Se procede con la fase de reconocimiento lanzando primeramente un ping a la dirección IP 10.10.10.7. ❯ ping -c 1 10.10.10.7 PING 10.10.10.7 (10.10.10.7) 56(84) bytes of data. 64 bytes from 10.10.10.7: icmp_seq=1 ttl=63 time=147 ms --- 10.10.10.7 ping statistics --- 1 packets transmitted, 1 received, 0% packet loss,...","categories": ["Easy","Linux"],
        "tags": ["LFI"],
        "url": "http://localhost:4000/htb-beep/",
        "teaser":"http://localhost:4000/assets/images/htb-beep/beep.jpg"},{
        "title": "Tratamiento de la TTY",
        "excerpt":"Tratamiento de la TTY Ejecutamos los siguientes comandos cuando estemos dentro de un sistema linux a través de una reverse shell: bash-3.2$ script /dev/null -c bash Presionamos Ctrl + z y ejecutamos los siguientes comandos en la terminal de nuestro equipo de atacante: stty raw -echo; fg [1] + continued...","categories": ["Easy","Windows"],
        "tags": ["Windows","Arbitrary_File_Upload","Patch_Management"],
        "url": "http://localhost:4000/tratamiento-tty/",
        "teaser":"http://localhost:4000/assets/images/tty/tty.png"}]
