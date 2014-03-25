ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, ch) {
  var x1 = ch;
  switch (x1) {
    case 9:
      /*<skip>*/;
    case 10:
      /*<skip>*/;
    case 13:
      /*<skip>*/;
    case 32:
      {
        return true;
        break
      };
    default:
      return false;
  }
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z = (function($$this, cs) {
  return (cs.nonEmpty__Z() && cs.forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(ch) {
      ch = ScalaJS.uC(ch);
      return ScalaJS.bZ(arg$outer.isSpace__C__Z(ch))
    })
  })($$this))))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlpha__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, c) {
  return (((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122)))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlphaDigit__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, c) {
  return ($$this.isAlpha__C__Z(c) || ((c >= 48) && (c <= 57)))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameChar__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, ch) {
  if ($$this.isNameStart__C__Z(ch)) {
    return true
  } else {
    var x1 = ScalaJS.modules.java_lang_Character().getType__C__I(ch);
    switch (x1) {
      case 8:
        /*<skip>*/;
      case 7:
        /*<skip>*/;
      case 6:
        /*<skip>*/;
      case 4:
        /*<skip>*/;
      case 9:
        {
          return true;
          break
        };
      default:
        return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(".-:")).contains__O__Z(ScalaJS.bC(ch));
    }
  }
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameStart__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, ch) {
  var x1 = ScalaJS.modules.java_lang_Character().getType__C__I(ch);
  switch (x1) {
    case 2:
      /*<skip>*/;
    case 1:
      /*<skip>*/;
    case 5:
      /*<skip>*/;
    case 3:
      /*<skip>*/;
    case 10:
      {
        return true;
        break
      };
    default:
      return (ch === 95);
  }
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isName__Lscala_xml_parsing_TokenTests__T__Z = (function($$this, s) {
  return ((new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).nonEmpty__Z() && $$this.isNameStart__C__Z(ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).head__O()))) && new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).tail__O()))).forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(ch) {
      ch = ScalaJS.uC(ch);
      return ScalaJS.bZ(arg$outer.isNameChar__C__Z(ch))
    })
  })($$this))))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isPubIDChar__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, ch) {
  return (($$this.isAlphaDigit__C__Z(ch) || ($$this.isSpace__C__Z(ch) && (ch !== 9))) || new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("-\\()+,./:=?;!*#@$_%")).contains__O__Z(ScalaJS.bC(ch)))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__isValidIANAEncoding__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z = (function($$this, ianaEncoding) {
  return ((ianaEncoding.nonEmpty__Z() && $$this.isAlpha__C__Z(ScalaJS.uC(ianaEncoding.head__O()))) && ScalaJS.as.scala_collection_IterableLike(ianaEncoding.tail__O()).forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(c) {
      c = ScalaJS.uC(c);
      return ScalaJS.bZ(ScalaJS.impls.scala_xml_parsing_TokenTests$class__charOK$1__Lscala_xml_parsing_TokenTests__C__Z(arg$outer, c))
    })
  })($$this))))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkSysID__Lscala_xml_parsing_TokenTests__T__Z = (function($$this, s) {
  return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapCharArray__AC__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Char.getArrayOf(), [34, 39]))).exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(s$1) {
    return (function(c) {
      c = ScalaJS.uC(c);
      return ScalaJS.bZ((!new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s$1)).contains__O__Z(ScalaJS.bC(c))))
    })
  })(s)))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkPubID__Lscala_xml_parsing_TokenTests__T__Z = (function($$this, s) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(ch) {
      ch = ScalaJS.uC(ch);
      return ScalaJS.bZ(arg$outer.isPubIDChar__C__Z(ch))
    })
  })($$this)))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__charOK$1__Lscala_xml_parsing_TokenTests__C__Z = (function($$this, c) {
  return ($$this.isAlphaDigit__C__Z(c) || new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("._-")).contains__O__Z(ScalaJS.bC(c)))
});
ScalaJS.impls.scala_xml_parsing_TokenTests$class__$init$__Lscala_xml_parsing_TokenTests__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=TokenTests$class.js.map
