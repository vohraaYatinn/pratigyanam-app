package com.example.app; // Replace with your actual package name

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.plugin.WebView;
import com.ionicframework.capacitor.Checkout;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    registerPlugin(Checkout.class);
    registerPlugin(WebView.class);
  }
}
