#!/usr/bin/env bash
grep -i "^$(tr ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz <<< $(cut -c 1 ./password))$" ./dict

