# После установочная инструкция

## Установка driver amd

```bash
sudo pacman -S mesa vulkan-radeon  vulkan-icd-loader mesa-vdpau  vulkan-mesa-layers --noconfirm
```

## Установка русской раскладки

Добавить нужную раскладку в `/etc/X11/xorg.conf.d/00-keyboard.conf`

```bash
Section "InputClass"
        Identifier "system-keyboard"
        MatchIsKeyboard "on"
        Option "XkbLayout" "us, ru"
        Option "XkbModel" "pc105+inet"
        Option "XkbOptions" "grp:caps_toggle"
EndSection
```

## Установка yay ( AUR Helper )

```bash
git clone https://aur.archlinux.org/yay-bin.git
cd yay-bin
makepkg -si
```

## Установка microcode

```bash
sudo pacman -S amd-ucode --noconfirm
sudo mkinitcpio -P
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Вкл.чить trim

```bash
sudo systemctl enable fstrim.timer
sudo fstrim -v /
```
