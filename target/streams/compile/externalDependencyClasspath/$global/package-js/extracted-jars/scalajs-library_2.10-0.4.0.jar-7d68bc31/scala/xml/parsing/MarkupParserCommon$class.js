ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__unreachable__Lscala_xml_parsing_MarkupParserCommon__Lscala_Nothing = (function($$this) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Cannot be reached.")
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xTag__Lscala_xml_parsing_MarkupParserCommon__O__Lscala_Tuple2 = (function($$this, pscope) {
  var name = $$this.xName__T();
  $$this.xSpaceOpt__V();
  return new ScalaJS.c.scala_Tuple2().init___O__O(name, $$this.mkAttributes__T__O__O(name, pscope))
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xProcInstr__Lscala_xml_parsing_MarkupParserCommon__O = (function($$this) {
  var n = $$this.xName__T();
  $$this.xSpaceOpt__V();
  return $$this.xTakeUntil__Lscala_Function2__Lscala_Function0__T__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer, n$1) {
    return (function(x$1, x$2) {
      return arg$outer.mkProcInstr__O__T__T__O(x$1, n$1, x$2)
    })
  })($$this, n)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.tmppos__O()
    })
  })($$this)), "?>")
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xAttributeValue__Lscala_xml_parsing_MarkupParserCommon__C__T = (function($$this, endCh) {
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  while (($$this.ch__C() !== endCh)) {
    if (($$this.ch__C() === 60)) {
      return ScalaJS.as.java_lang_String($$this.errorAndResult__T__O__O("'<' not allowed in attrib value", ""))
    } else {
      if (($$this.ch__C() === 26)) {
        $$this.truncatedError__T__Lscala_Nothing("")
      } else {
        buf.append__C__Lscala_collection_mutable_StringBuilder($$this.ch$undreturning$undnextch__C())
      }
    }
  };
  $$this.ch$undreturning$undnextch__C();
  return buf.toString__T()
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xAttributeValue__Lscala_xml_parsing_MarkupParserCommon__T = (function($$this) {
  var str = $$this.xAttributeValue__C__T($$this.ch$undreturning$undnextch__C());
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__normalizeAttributeValue__Lscala_xml_parsing_MarkupParserCommon__T__T($$this, str)
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__takeUntilChar__Lscala_xml_parsing_MarkupParserCommon__Lscala_collection_Iterator__C__T = (function($$this, it, end) {
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  while (it.hasNext__Z()) {
    var x1 = ScalaJS.uC(it.next__O());
    matchEnd4: {
      if ((end === x1)) {
        return buf.toString__T()
      };
      buf.append__C__Lscala_collection_mutable_StringBuilder(x1);
      break matchEnd4
    }
  };
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("Expected '%s'")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bC(end)]))))
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xEndTag__Lscala_xml_parsing_MarkupParserCommon__T__V = (function($$this, startName) {
  $$this.xToken__C__V(47);
  if ((!ScalaJS.anyRefEqEq($$this.xName__T(), startName))) {
    $$this.errorNoEnd__T__Lscala_Nothing(startName)
  };
  $$this.xSpaceOpt__V();
  $$this.xToken__C__V(62)
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xName__Lscala_xml_parsing_MarkupParserCommon__T = (function($$this) {
  if (($$this.ch__C() === 26)) {
    $$this.truncatedError__T__Lscala_Nothing("")
  } else {
    if ((!$$this.isNameStart__C__Z($$this.ch__C()))) {
      return ScalaJS.as.java_lang_String($$this.errorAndResult__T__O__O(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("name expected, but char '%s' cannot start a name")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bC($$this.ch__C())]))), ""))
    }
  };
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  do {
    buf.append__C__Lscala_collection_mutable_StringBuilder($$this.ch$undreturning$undnextch__C())
  } while ($$this.isNameChar__C__Z($$this.ch__C()));
  if ((ScalaJS.uC(buf.last__O()) === 58)) {
    $$this.reportSyntaxError__T__V("name cannot end in ':'");
    return ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(buf.toString__T())).dropRight__I__O(1))
  } else {
    return buf.toString__T()
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__attr$undunescape__Lscala_xml_parsing_MarkupParserCommon__T__T = (function($$this, s) {
  var x1 = s;
  if (ScalaJS.anyRefEqEq("lt", x1)) {
    return "<"
  };
  if (ScalaJS.anyRefEqEq("gt", x1)) {
    return ">"
  };
  if (ScalaJS.anyRefEqEq("amp", x1)) {
    return "&"
  };
  if (ScalaJS.anyRefEqEq("apos", x1)) {
    return "'"
  };
  if (ScalaJS.anyRefEqEq("quot", x1)) {
    return "\""
  };
  if (ScalaJS.anyRefEqEq("quote", x1)) {
    return "\""
  };
  return (("&" + s) + ";")
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__normalizeAttributeValue__Lscala_xml_parsing_MarkupParserCommon__T__T = (function($$this, attval) {
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var it = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(attval)).iterator__Lscala_collection_Iterator().buffered__Lscala_collection_BufferedIterator();
  while (it.hasNext__Z()) {
    var jsx$2 = buf;
    var x1 = ScalaJS.uC(it.next__O());
    switch (x1) {
      case 32:
        /*<skip>*/;
      case 9:
        /*<skip>*/;
      case 10:
        /*<skip>*/;
      case 13:
        {
          var jsx$1 = " ";
          break
        };
      case 38:
        {
          if ((ScalaJS.uC(it.head__O()) === 35)) {
            it.next__O();
            var jsx$1 = $$this.xCharRef__Lscala_collection_Iterator__T(it)
          } else {
            var jsx$1 = ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__attr$undunescape__Lscala_xml_parsing_MarkupParserCommon__T__T($$this, ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__takeUntilChar__Lscala_xml_parsing_MarkupParserCommon__Lscala_collection_Iterator__C__T($$this, it, 59))
          };
          break
        };
      default:
        var jsx$1 = ScalaJS.bC(x1);
    };
    jsx$2.append__O__Lscala_collection_mutable_StringBuilder(jsx$1)
  };
  return buf.toString__T()
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xCharRef__Lscala_xml_parsing_MarkupParserCommon__Lscala_Function0__Lscala_Function0__T = (function($$this, ch, nextch) {
  return ScalaJS.modules.scala_xml_Utility().parseCharRef__Lscala_Function0__Lscala_Function0__Lscala_Function1__Lscala_Function1__T(ch, nextch, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(str) {
      arg$outer.reportSyntaxError__T__V(str);
      return ScalaJS.bV(undefined)
    })
  })($$this)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(msg) {
      return arg$outer.truncatedError__T__Lscala_Nothing(msg)
    })
  })($$this)))
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xCharRef__Lscala_xml_parsing_MarkupParserCommon__Lscala_collection_Iterator__T = (function($$this, it) {
  var c = new ScalaJS.c.scala_runtime_CharRef().init___C(ScalaJS.uC(it.next__O()));
  return ScalaJS.modules.scala_xml_Utility().parseCharRef__Lscala_Function0__Lscala_Function0__Lscala_Function1__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(c$1) {
    return (function() {
      return ScalaJS.bC(c$1.elem$1)
    })
  })(c)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(c$1, it$1) {
    return (function() {
      c$1.elem$1 = ScalaJS.uC(it$1.next__O());
      return ScalaJS.bV(undefined)
    })
  })(c, it)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(str) {
      arg$outer.reportSyntaxError__T__V(str);
      return ScalaJS.bV(undefined)
    })
  })($$this)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(msg) {
      return arg$outer.truncatedError__T__Lscala_Nothing(msg)
    })
  })($$this)))
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xCharRef__Lscala_xml_parsing_MarkupParserCommon__T = (function($$this) {
  return $$this.xCharRef__Lscala_Function0__Lscala_Function0__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.bC(arg$outer.ch__C())
    })
  })($$this)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      arg$outer.nextch__V();
      return ScalaJS.bV(undefined)
    })
  })($$this)))
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__errorAndResult__Lscala_xml_parsing_MarkupParserCommon__T__O__O = (function($$this, msg, x) {
  $$this.reportSyntaxError__T__V(msg);
  return x
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xToken__Lscala_xml_parsing_MarkupParserCommon__C__V = (function($$this, that) {
  if (($$this.ch__C() === that)) {
    $$this.nextch__V()
  } else {
    $$this.xHandleError__C__T__V(that, new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("'%s' expected instead of '%s'")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bC(that), ScalaJS.bC($$this.ch__C())]))))
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xToken__Lscala_xml_parsing_MarkupParserCommon__Lscala_collection_Seq__V = (function($$this, that) {
  that.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(that) {
      that = ScalaJS.uC(that);
      arg$outer.xToken__C__V(that);
      return ScalaJS.bV(undefined)
    })
  })($$this)))
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xEQ__Lscala_xml_parsing_MarkupParserCommon__V = (function($$this) {
  $$this.xSpaceOpt__V();
  $$this.xToken__C__V(61);
  $$this.xSpaceOpt__V()
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xSpaceOpt__Lscala_xml_parsing_MarkupParserCommon__V = (function($$this) {
  while (($$this.isSpace__C__Z($$this.ch__C()) && (!$$this.eof__Z()))) {
    $$this.nextch__V()
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xSpace__Lscala_xml_parsing_MarkupParserCommon__V = (function($$this) {
  if ($$this.isSpace__C__Z($$this.ch__C())) {
    $$this.nextch__V();
    $$this.xSpaceOpt__V()
  } else {
    $$this.xHandleError__C__T__V($$this.ch__C(), "whitespace expected")
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__returning__Lscala_xml_parsing_MarkupParserCommon__O__Lscala_Function1__O = (function($$this, x, f) {
  f.apply__O__O(x);
  return x
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__saving__Lscala_xml_parsing_MarkupParserCommon__O__Lscala_Function1__Lscala_Function0__O = (function($$this, getter, setter, body) {
  var saved = getter;
  try {
    return body.apply__O()
  } finally {
    setter.apply__O__O(saved)
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xTakeUntil__Lscala_xml_parsing_MarkupParserCommon__Lscala_Function2__Lscala_Function0__T__O = (function($$this, handler, positioner, until) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var head = ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(until)).head__O());
  var rest = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(until)).tail__O());
  while (true) {
    if ((($$this.ch__C() === head) && ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__peek__Lscala_xml_parsing_MarkupParserCommon__T__Z($$this, rest))) {
      return handler.apply__O__O__O(positioner.apply__O(), sb.toString__T())
    } else {
      if (($$this.ch__C() === 26)) {
        $$this.truncatedError__T__Lscala_Nothing("")
      }
    };
    sb.append__C__Lscala_collection_mutable_StringBuilder($$this.ch__C());
    $$this.nextch__V()
  };
  return $$this.unreachable__Lscala_Nothing()
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__peek__Lscala_xml_parsing_MarkupParserCommon__T__Z = (function($$this, lookingFor) {
  if ($$this.lookahead__Lscala_collection_BufferedIterator().take__I__Lscala_collection_Iterator(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(lookingFor)).sameElements__Lscala_collection_Iterator__Z(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(lookingFor)).iterator__Lscala_collection_Iterator())) {
    ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(lookingFor)).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(x$3) {
        x$3 = ScalaJS.uI(x$3);
        arg$outer.nextch__V();
        return ScalaJS.bV(undefined)
      })
    })($$this)));
    return true
  } else {
    return false
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__$init$__Lscala_xml_parsing_MarkupParserCommon__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=MarkupParserCommon$class.js.map
