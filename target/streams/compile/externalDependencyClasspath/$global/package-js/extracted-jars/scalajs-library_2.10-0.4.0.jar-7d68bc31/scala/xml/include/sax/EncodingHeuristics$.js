/** @constructor */
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype.constructor = ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$;
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype.readEncodingFromStream__Ljava_io_InputStream__T = (function(in$2) {
  var ret = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  var bytesToRead = 1024;
  in$2.mark__I__V(bytesToRead);
  var bytes = new ScalaJS.c.scala_Tuple4().init___O__O__O__O(ScalaJS.bI(in$2.read__I()), ScalaJS.bI(in$2.read__I()), ScalaJS.bI(in$2.read__I()), ScalaJS.bI(in$2.read__I()));
  var jsx$2 = ret;
  var x1 = bytes;
  matchEnd54: {
    if ((x1 !== null)) {
      var p2 = ScalaJS.uI(x1.$$und1__O());
      var p3 = ScalaJS.uI(x1.$$und2__O());
      var p4 = ScalaJS.uI(x1.$$und3__O());
      var p5 = ScalaJS.uI(x1.$$und4__O());
      if ((0 === p2)) {
        if ((0 === p3)) {
          if ((254 === p4)) {
            if ((255 === p5)) {
              var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().bigUCS4__T();
              break matchEnd54
            }
          }
        }
      }
    };
    if ((x1 !== null)) {
      var p6 = ScalaJS.uI(x1.$$und1__O());
      var p7 = ScalaJS.uI(x1.$$und2__O());
      var p8 = ScalaJS.uI(x1.$$und3__O());
      var p9 = ScalaJS.uI(x1.$$und4__O());
      if ((255 === p6)) {
        if ((254 === p7)) {
          if ((0 === p8)) {
            if ((0 === p9)) {
              var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().littleUCS4__T();
              break matchEnd54
            }
          }
        }
      }
    };
    if ((x1 !== null)) {
      var p10 = ScalaJS.uI(x1.$$und1__O());
      var p11 = ScalaJS.uI(x1.$$und2__O());
      var p12 = ScalaJS.uI(x1.$$und3__O());
      var p13 = ScalaJS.uI(x1.$$und4__O());
      if ((0 === p10)) {
        if ((0 === p11)) {
          if ((255 === p12)) {
            if ((254 === p13)) {
              var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().unusualUCS4__T();
              break matchEnd54
            }
          }
        }
      }
    };
    if ((x1 !== null)) {
      var p14 = ScalaJS.uI(x1.$$und1__O());
      var p15 = ScalaJS.uI(x1.$$und2__O());
      var p16 = ScalaJS.uI(x1.$$und3__O());
      var p17 = ScalaJS.uI(x1.$$und4__O());
      if ((254 === p14)) {
        if ((255 === p15)) {
          if ((0 === p16)) {
            if ((0 === p17)) {
              var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().unusualUCS4__T();
              break matchEnd54
            }
          }
        }
      }
    };
    if ((x1 !== null)) {
      var p18 = ScalaJS.uI(x1.$$und1__O());
      var p19 = ScalaJS.uI(x1.$$und2__O());
      if ((254 === p18)) {
        if ((255 === p19)) {
          var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().bigUTF16__T();
          break matchEnd54
        }
      }
    };
    if ((x1 !== null)) {
      var p22 = ScalaJS.uI(x1.$$und1__O());
      var p23 = ScalaJS.uI(x1.$$und2__O());
      if ((255 === p22)) {
        if ((254 === p23)) {
          var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().littleUTF16__T();
          break matchEnd54
        }
      }
    };
    if ((x1 !== null)) {
      var p26 = ScalaJS.uI(x1.$$und1__O());
      var p27 = ScalaJS.uI(x1.$$und2__O());
      var p28 = ScalaJS.uI(x1.$$und3__O());
      if ((239 === p26)) {
        if ((187 === p27)) {
          if ((191 === p28)) {
            var jsx$1 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().utf8__T();
            break matchEnd54
          }
        }
      }
    };
    var jsx$1 = null;
    break matchEnd54
  };
  jsx$2.elem$1 = jsx$1;
  if ((!ScalaJS.anyRefEqEq(ScalaJS.as.java_lang_String(ret.elem$1), null))) {
    return this.resetAndRet$1__p1__Ljava_io_InputStream__Lscala_runtime_ObjectRef__T(in$2, ret)
  };
  var jsx$4 = ret;
  var x1$2 = bytes;
  matchEnd67: {
    if ((x1$2 !== null)) {
      var p2$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p3$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p4$2 = ScalaJS.uI(x1$2.$$und3__O());
      var p5$2 = ScalaJS.uI(x1$2.$$und4__O());
      if ((0 === p2$2)) {
        if ((0 === p3$2)) {
          if ((0 === p4$2)) {
            if ((60 === p5$2)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().bigUCS4__T();
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p6$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p7$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p8$2 = ScalaJS.uI(x1$2.$$und3__O());
      var p9$2 = ScalaJS.uI(x1$2.$$und4__O());
      if ((60 === p6$2)) {
        if ((0 === p7$2)) {
          if ((0 === p8$2)) {
            if ((0 === p9$2)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().littleUCS4__T();
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p10$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p11$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p12$2 = ScalaJS.uI(x1$2.$$und3__O());
      var p13$2 = ScalaJS.uI(x1$2.$$und4__O());
      if ((0 === p10$2)) {
        if ((0 === p11$2)) {
          if ((60 === p12$2)) {
            if ((0 === p13$2)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().unusualUCS4__T();
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p14$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p15$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p16$2 = ScalaJS.uI(x1$2.$$und3__O());
      var p17$2 = ScalaJS.uI(x1$2.$$und4__O());
      if ((0 === p14$2)) {
        if ((60 === p15$2)) {
          if ((0 === p16$2)) {
            if ((0 === p17$2)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().unusualUCS4__T();
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p18$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p19$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p20 = ScalaJS.uI(x1$2.$$und3__O());
      var p21 = ScalaJS.uI(x1$2.$$und4__O());
      if ((0 === p18$2)) {
        if ((60 === p19$2)) {
          if ((0 === p20)) {
            if ((63 === p21)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().bigUTF16__T();
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p22$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p23$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p24 = ScalaJS.uI(x1$2.$$und3__O());
      var p25 = ScalaJS.uI(x1$2.$$und4__O());
      if ((60 === p22$2)) {
        if ((0 === p23$2)) {
          if ((63 === p24)) {
            if ((0 === p25)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().littleUTF16__T();
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p26$2 = ScalaJS.uI(x1$2.$$und1__O());
      var p27$2 = ScalaJS.uI(x1$2.$$und2__O());
      var p28$2 = ScalaJS.uI(x1$2.$$und3__O());
      var p29 = ScalaJS.uI(x1$2.$$und4__O());
      if ((60 === p26$2)) {
        if ((63 === p27$2)) {
          if ((120 === p28$2)) {
            if ((109 === p29)) {
              var jsx$3 = this.readASCIIEncoding$1__p1__Ljava_io_InputStream__I__T(in$2, bytesToRead);
              break matchEnd67
            }
          }
        }
      }
    };
    if ((x1$2 !== null)) {
      var p30 = ScalaJS.uI(x1$2.$$und1__O());
      var p31 = ScalaJS.uI(x1$2.$$und2__O());
      var p32 = ScalaJS.uI(x1$2.$$und3__O());
      var p33 = ScalaJS.uI(x1$2.$$und4__O());
      if ((76 === p30)) {
        if ((111 === p31)) {
          if ((167 === p32)) {
            if ((148 === p33)) {
              var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().utf8__T();
              break matchEnd67
            }
          }
        }
      }
    };
    var jsx$3 = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().utf8__T();
    break matchEnd67
  };
  jsx$4.elem$1 = jsx$3;
  return this.resetAndRet$1__p1__Ljava_io_InputStream__Lscala_runtime_ObjectRef__T(in$2, ret)
});
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype.resetAndRet$1__p1__Ljava_io_InputStream__Lscala_runtime_ObjectRef__T = (function(in$1, ret$1) {
  in$1.reset__V();
  return ScalaJS.as.java_lang_String(ret$1.elem$1)
});
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype.readASCIIEncoding$1__p1__Ljava_io_InputStream__I__T = (function(in$1, bytesToRead$1) {
  var data = ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [(bytesToRead$1 - 4)]);
  var length = in$1.read__AB__I__I__I(data, 0, (bytesToRead$1 - 4));
  var declaration = ScalaJS.modules.scala_scalajs_runtime_RuntimeString().newString__AB__I__I__T__Lscala_scalajs_js_String(data, 0, length, "ISO-8859-1");
  var regexp = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("(?m).*?encoding\\s*=\\s*[\"'](.+?)['\"]")).r__Lscala_util_matching_Regex();
  var x1 = regexp.findFirstMatchIn__Ljava_lang_CharSequence__Lscala_Option(declaration);
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics$EncodingNames().$default__T()
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var md = ScalaJS.as.scala_util_matching_Regex$Match(x2.x__O());
    return ScalaJS.as.java_lang_String(md.subgroups__Lscala_collection_immutable_List().apply__I__O(0))
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype.readEncodingFromStream__Ljava_io_InputStream__ = (function(in$2) {
  return this.readEncodingFromStream__Ljava_io_InputStream__T(in$2)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_include_sax_EncodingHeuristics$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_include_sax_EncodingHeuristics$.prototype = ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype;
ScalaJS.is.scala_xml_include_sax_EncodingHeuristics$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_include_sax_EncodingHeuristics$)))
});
ScalaJS.as.scala_xml_include_sax_EncodingHeuristics$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_include_sax_EncodingHeuristics$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.include.sax.EncodingHeuristics")
  }
});
ScalaJS.isArrayOf.scala_xml_include_sax_EncodingHeuristics$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_include_sax_EncodingHeuristics$)))
});
ScalaJS.asArrayOf.scala_xml_include_sax_EncodingHeuristics$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_include_sax_EncodingHeuristics$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.include.sax.EncodingHeuristics;", depth)
  }
});
ScalaJS.data.scala_xml_include_sax_EncodingHeuristics$ = new ScalaJS.ClassTypeData({
  scala_xml_include_sax_EncodingHeuristics$: 0
}, false, "scala.xml.include.sax.EncodingHeuristics$", ScalaJS.data.java_lang_Object, {
  scala_xml_include_sax_EncodingHeuristics$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$.prototype.$classData = ScalaJS.data.scala_xml_include_sax_EncodingHeuristics$;
ScalaJS.moduleInstances.scala_xml_include_sax_EncodingHeuristics = undefined;
ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_include_sax_EncodingHeuristics)) {
    ScalaJS.moduleInstances.scala_xml_include_sax_EncodingHeuristics = new ScalaJS.c.scala_xml_include_sax_EncodingHeuristics$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_include_sax_EncodingHeuristics
});
//@ sourceMappingURL=EncodingHeuristics$.js.map
