import { Component, OnInit, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrl: './input-section.component.css'
})
export class InputSectionComponent {

  onInputChange(event: KeyboardEvent): void {
    this.removeButton(event);
    this.addInputWithButton(event);
    this.removeInput(event);
  }

  removeButton(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const isEmpty = target.value === '';
    const parent = (event.target as HTMLElement).parentElement
    const button = parent?.querySelector('.search-button') as HTMLElement;

    if (!isEmpty) {
      console.log('Não está vazio');
      button?.classList.add('hidden');
    } else {
      console.log('Está vazio');
      button?.classList.remove('hidden');
    }

  }

  addInputWithButton(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const isEmpty = target.value === '';
    const parent = (event.target as HTMLElement).parentElement
    const searchContainer = document.querySelector('.search-container');
    const lastChild = document.querySelector('.search-box:last-child');
    const isLastChildButtonHidden = lastChild?.querySelector('.search-button')?.classList.contains('hidden');

    if (!isEmpty && isLastChildButtonHidden) {
      console.log('Adicionando novo input com botão');
      const copy = document.querySelector('.template')?.cloneNode(true) as HTMLElement;

      copy.classList.remove('template', 'hidden');
      searchContainer?.appendChild(copy);
    }
  }

  removeInput(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const isEmpty = target.value === '';
    const parent = (event.target as HTMLElement).parentElement
    const button = parent?.querySelector('.search-button');
    const searchContainer = document.querySelector('.search-container');
    const lastChild = document.querySelector('.search-box:last-child');
    const isLastChildButtonHidden = lastChild?.querySelector('.search-button')?.classList.contains('.hidden');
    const inputs = searchContainer?.querySelectorAll('.search-input');

    if(isEmpty && !isLastChildButtonHidden && inputs && inputs?.length > 1 && lastChild){
      searchContainer?.removeChild(lastChild);
    }


  }
}
