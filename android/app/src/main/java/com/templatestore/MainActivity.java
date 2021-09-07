package com.templatestore;
import android.os.Bundle; // here
import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends NavigationActivity {

 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }

}
