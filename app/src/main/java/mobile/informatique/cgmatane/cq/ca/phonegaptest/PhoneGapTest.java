package mobile.informatique.cgmatane.cq.ca.phonegaptest;

import android.os.Bundle;
import android.widget.LinearLayout;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;



public class PhoneGapTest extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
