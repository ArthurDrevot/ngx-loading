import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxLoadingModule } from '../../../ngx-loading/src/lib/ngx-loading.module';
import { ngxLoadingAnimationTypes } from '../../../ngx-loading/src/lib/ngx-loading-config';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.3)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff',
        fullScreenBackdrop: false,
      })
    ),
  ],
};
