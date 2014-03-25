/** @constructor */
ScalaJS.c.scala_reflect_NameTransformer$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MODULE$undSUFFIX$undSTRING$1 = null;
  this.NAME$undJOIN$undSTRING$1 = null;
  this.MODULE$undINSTANCE$undNAME$1 = null;
  this.nops$1 = 0;
  this.ncodes$1 = 0;
  this.op2code$1 = null;
  this.code2op$1 = null
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_NameTransformer$.prototype.constructor = ScalaJS.c.scala_reflect_NameTransformer$;
ScalaJS.c.scala_reflect_NameTransformer$.prototype.MODULE$undINSTANCE$undNAME__T = (function() {
  return this.MODULE$undINSTANCE$undNAME$1
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.nops__p1__I = (function() {
  return this.nops$1
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.ncodes__p1__I = (function() {
  return this.ncodes$1
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.op2code__p1__AT = (function() {
  return this.op2code$1
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.code2op__p1__ALscala_reflect_NameTransformer$OpCodes = (function() {
  return this.code2op$1
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.enterOp__p1__C__T__V = (function(op, code) {
  this.op2code__p1__AT().underlying[op] = code;
  var c = ((((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(code, 1) - 97) * 26) + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(code, 2)) - 97);
  this.code2op__p1__ALscala_reflect_NameTransformer$OpCodes().underlying[c] = new ScalaJS.c.scala_reflect_NameTransformer$OpCodes().init___C__T__Lscala_reflect_NameTransformer$OpCodes(op, code, this.code2op__p1__ALscala_reflect_NameTransformer$OpCodes().underlying[c])
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.encode__T__T = (function(name) {
  var buf = null;
  var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(name);
  var i = 0;
  while ((i < len)) {
    var c = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(name, i);
    if (((c < this.nops__p1__I()) && (this.op2code__p1__AT().underlying[c] !== null))) {
      if ((buf === null)) {
        buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
        buf.append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name, 0, i))
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      buf.append__T__Lscala_collection_mutable_StringBuilder(this.op2code__p1__AT().underlying[c])
    } else {
      if ((!ScalaJS.modules.java_lang_Character().isJavaIdentifierPart__C__Z(c))) {
        if ((buf === null)) {
          buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
          buf.append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name, 0, i))
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
        buf.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("$u%04X")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(c)]))))
      } else {
        if ((buf !== null)) {
          buf.append__C__Lscala_collection_mutable_StringBuilder(c)
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        }
      }
    };
    i = (i + 1)
  };
  if ((buf === null)) {
    return name
  } else {
    return buf.toString__T()
  }
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.decode__T__T = (function(name0) {
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(name0, "<init>")) {
    var name = (("" + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name0, 0, (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(name0) - ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I("<init>")))) + "this")
  } else {
    var name = name0
  };
  var buf = null;
  var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(name);
  var i = 0;
  while ((i < len)) {
    var ops = null;
    var unicode = false;
    var c = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(name, i);
    if (((c === 36) && ((i + 2) < len))) {
      var ch1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(name, (i + 1));
      if (((97 <= ch1) && (ch1 <= 122))) {
        var ch2 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(name, (i + 2));
        if (((97 <= ch2) && (ch2 <= 122))) {
          ops = this.code2op__p1__ALscala_reflect_NameTransformer$OpCodes().underlying[((((ch1 - 97) * 26) + ch2) - 97)];
          while (((ops !== null) && (!ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__I__Z(name, ops.code__T(), i)))) {
            ops = ops.next__Lscala_reflect_NameTransformer$OpCodes()
          };
          if ((ops !== null)) {
            if ((buf === null)) {
              buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
              buf.append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name, 0, i))
            } else {
              ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
            };
            buf.append__C__Lscala_collection_mutable_StringBuilder(ops.op__C());
            i = (i + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ops.code__T()))
          }
        } else {
          if (((((len - i) >= 6) && (ch1 === 117)) && (ScalaJS.modules.java_lang_Character().isDigit__C__Z(ch2) || ((65 <= ch2) && (ch2 <= 70))))) {
            var hex = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name, (i + 2), (i + 6));
            try {
              var str = (ScalaJS.modules.java_lang_Integer().parseInt__T__I__I(hex, 16) & 65535);
              if ((buf === null)) {
                buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
                buf.append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name, 0, i))
              } else {
                ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
              };
              buf.append__C__Lscala_collection_mutable_StringBuilder(str);
              i = (i + 6);
              unicode = true
            } catch ($jsexc$) {
              if (ScalaJS.is.java_lang_NumberFormatException($jsexc$)) {
                /*<skip>*/
              } else {
                throw $jsexc$
              }
            }
          }
        }
      }
    };
    if (((ops === null) && (!unicode))) {
      if ((buf !== null)) {
        buf.append__C__Lscala_collection_mutable_StringBuilder(c)
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      i = (i + 1)
    }
  };
  if ((buf === null)) {
    return name
  } else {
    return buf.toString__T()
  }
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_reflect_NameTransformer = this;
  this.MODULE$undSUFFIX$undSTRING$1 = ScalaJS.as.java_lang_String(ScalaJS.modules.scala_sys_package().props__Lscala_sys_SystemProperties().getOrElse__O__Lscala_Function0__O("SCALA_MODULE_SUFFIX_STRING", new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "$"
    })
  })())));
  this.NAME$undJOIN$undSTRING$1 = ScalaJS.as.java_lang_String(ScalaJS.modules.scala_sys_package().props__Lscala_sys_SystemProperties().getOrElse__O__Lscala_Function0__O("SCALA_NAME_JOIN_STRING", new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "$"
    })
  })())));
  this.MODULE$undINSTANCE$undNAME$1 = "MODULE$";
  this.nops$1 = 128;
  this.ncodes$1 = 676;
  this.op2code$1 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_String.getArrayOf(), [this.nops__p1__I()]);
  this.code2op$1 = ScalaJS.newArrayObject(ScalaJS.data.scala_reflect_NameTransformer$OpCodes.getArrayOf(), [this.ncodes__p1__I()]);
  this.enterOp__p1__C__T__V(126, "$tilde");
  this.enterOp__p1__C__T__V(61, "$eq");
  this.enterOp__p1__C__T__V(60, "$less");
  this.enterOp__p1__C__T__V(62, "$greater");
  this.enterOp__p1__C__T__V(33, "$bang");
  this.enterOp__p1__C__T__V(35, "$hash");
  this.enterOp__p1__C__T__V(37, "$percent");
  this.enterOp__p1__C__T__V(94, "$up");
  this.enterOp__p1__C__T__V(38, "$amp");
  this.enterOp__p1__C__T__V(124, "$bar");
  this.enterOp__p1__C__T__V(42, "$times");
  this.enterOp__p1__C__T__V(47, "$div");
  this.enterOp__p1__C__T__V(43, "$plus");
  this.enterOp__p1__C__T__V(45, "$minus");
  this.enterOp__p1__C__T__V(58, "$colon");
  this.enterOp__p1__C__T__V(92, "$bslash");
  this.enterOp__p1__C__T__V(63, "$qmark");
  this.enterOp__p1__C__T__V(64, "$at");
  return this
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.decode__T__ = (function(name0) {
  return this.decode__T__T(name0)
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.encode__T__ = (function(name) {
  return this.encode__T__T(name)
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.MODULE$undINSTANCE$undNAME__ = (function() {
  return this.MODULE$undINSTANCE$undNAME__T()
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.NAME$undJOIN$undSTRING__ = (function() {
  return this.NAME$undJOIN$undSTRING__T()
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.MODULE$undSUFFIX$undSTRING__ = (function() {
  return this.MODULE$undSUFFIX$undSTRING__T()
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_NameTransformer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_NameTransformer$.prototype = ScalaJS.c.scala_reflect_NameTransformer$.prototype;
ScalaJS.is.scala_reflect_NameTransformer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_NameTransformer$)))
});
ScalaJS.as.scala_reflect_NameTransformer$ = (function(obj) {
  if ((ScalaJS.is.scala_reflect_NameTransformer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.NameTransformer")
  }
});
ScalaJS.isArrayOf.scala_reflect_NameTransformer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_NameTransformer$)))
});
ScalaJS.asArrayOf.scala_reflect_NameTransformer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_NameTransformer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.NameTransformer;", depth)
  }
});
ScalaJS.data.scala_reflect_NameTransformer$ = new ScalaJS.ClassTypeData({
  scala_reflect_NameTransformer$: 0
}, false, "scala.reflect.NameTransformer$", ScalaJS.data.java_lang_Object, {
  scala_reflect_NameTransformer$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_NameTransformer$.prototype.$classData = ScalaJS.data.scala_reflect_NameTransformer$;
ScalaJS.moduleInstances.scala_reflect_NameTransformer = undefined;
ScalaJS.modules.scala_reflect_NameTransformer = (function() {
  if ((!ScalaJS.moduleInstances.scala_reflect_NameTransformer)) {
    ScalaJS.moduleInstances.scala_reflect_NameTransformer = new ScalaJS.c.scala_reflect_NameTransformer$().init___()
  };
  return ScalaJS.moduleInstances.scala_reflect_NameTransformer
});
//@ sourceMappingURL=NameTransformer$.js.map
