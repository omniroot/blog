# Установка BlackArch Repo

```bash
curl -O https://blackarch.org/strap.sh && chmod +x strap.sh && sudo ./strap.sh && sudo pacman -Syu && rm -rf strap.sh
```

## Посмотреть список категорий BlackArch

```bash
sudo pacman -Sg | grep blackarch
```

## Установить часто используемые категории

```bash
sudo pacman -S blackarch-keylogger blackarch-tunnel blackarch-webapp blackarch-scanner blackarch-proxy blackarch-windows blackarch-disassembler blackarch-exploitation blackarch-cracker blackarch-backdoor blackarch-networking blackarch-wireless
sudo pacman -S blackarch-sniffer blackarch-automation blackarch-packer blackarch-mobile blackarch-reversing blackarch-malware blackarch-code-audit blackarch-decompiler blackarch-debugger blackarch-unpacker
```
