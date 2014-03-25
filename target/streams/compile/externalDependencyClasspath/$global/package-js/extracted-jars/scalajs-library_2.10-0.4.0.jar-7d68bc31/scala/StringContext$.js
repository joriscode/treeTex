/** @constructor */
ScalaJS.c.scala_StringContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_StringContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_StringContext$.prototype.constructor = ScalaJS.c.scala_StringContext$;
ScalaJS.c.scala_StringContext$.prototype.treatEscapes__T__T = (function(str) {
  var bldr$lzy = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  var bitmap$0 = new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(0);
  var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(str);
  var start = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var cur = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var idx = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  while ((idx.elem$1 < len)) {
    cur.elem$1 = idx.elem$1;
    if ((ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1) === 92)) {
      idx.elem$1 = (idx.elem$1 + 1);
      if ((idx.elem$1 >= len)) {
        throw new ScalaJS.c.scala_StringContext$InvalidEscapeException().init___T__I(str, cur.elem$1)
      };
      if (((48 <= ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1)) && (ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1) <= 55))) {
        var leadch = ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1);
        var oct = (leadch - 48);
        idx.elem$1 = (idx.elem$1 + 1);
        if ((((idx.elem$1 < len) && (48 <= ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1))) && (ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1) <= 55))) {
          oct = (((oct * 8) + ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1)) - 48);
          idx.elem$1 = (idx.elem$1 + 1);
          if (((((idx.elem$1 < len) && (leadch <= 51)) && (48 <= ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1))) && (ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1) <= 55))) {
            oct = (((oct * 8) + ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1)) - 48);
            idx.elem$1 = (idx.elem$1 + 1)
          }
        };
        this.output$1__p1__C__T__Lscala_runtime_ObjectRef__Lscala_runtime_IntRef__Lscala_runtime_IntRef__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__V((oct & 65535), str, bldr$lzy, start, cur, idx, bitmap$0)
      } else {
        var ch = ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(str), idx.elem$1);
        idx.elem$1 = (idx.elem$1 + 1);
        var x1 = ch;
        switch (x1) {
          case 98:
            {
              var jsx$1 = 8;
              break
            };
          case 116:
            {
              var jsx$1 = 9;
              break
            };
          case 110:
            {
              var jsx$1 = 10;
              break
            };
          case 102:
            {
              var jsx$1 = 12;
              break
            };
          case 114:
            {
              var jsx$1 = 13;
              break
            };
          case 34:
            {
              var jsx$1 = 34;
              break
            };
          case 39:
            {
              var jsx$1 = 39;
              break
            };
          case 92:
            {
              var jsx$1 = 92;
              break
            };
          default:
            throw new ScalaJS.c.scala_StringContext$InvalidEscapeException().init___T__I(str, cur.elem$1);
        };
        this.output$1__p1__C__T__Lscala_runtime_ObjectRef__Lscala_runtime_IntRef__Lscala_runtime_IntRef__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__V(jsx$1, str, bldr$lzy, start, cur, idx, bitmap$0)
      }
    } else {
      idx.elem$1 = (idx.elem$1 + 1)
    }
  };
  if ((start.elem$1 === 0)) {
    return str
  } else {
    return this.bldr$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Ljava_lang_StringBuilder(bldr$lzy, bitmap$0).append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuilder(str, start.elem$1, idx.elem$1).toString__T()
  }
});
ScalaJS.c.scala_StringContext$.prototype.apply__Lscala_collection_Seq__Lscala_StringContext = (function(parts) {
  return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(parts)
});
ScalaJS.c.scala_StringContext$.prototype.unapplySeq__Lscala_StringContext__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.parts__Lscala_collection_Seq())
  }
});
ScalaJS.c.scala_StringContext$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_StringContext()
});
ScalaJS.c.scala_StringContext$.prototype.bldr$lzycompute$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Ljava_lang_StringBuilder = (function(bldr$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    bldr$lzy$1.elem$1 = new ScalaJS.c.java_lang_StringBuilder().init___();
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.java_lang_StringBuilder(bldr$lzy$1.elem$1)
});
ScalaJS.c.scala_StringContext$.prototype.bldr$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Ljava_lang_StringBuilder = (function(bldr$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    return this.bldr$lzycompute$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Ljava_lang_StringBuilder(bldr$lzy$1, bitmap$0$1)
  } else {
    return ScalaJS.as.java_lang_StringBuilder(bldr$lzy$1.elem$1)
  }
});
ScalaJS.c.scala_StringContext$.prototype.output$1__p1__C__T__Lscala_runtime_ObjectRef__Lscala_runtime_IntRef__Lscala_runtime_IntRef__Lscala_runtime_IntRef__Lscala_runtime_VolatileByteRef__V = (function(ch, str$1, bldr$lzy$1, start$1, cur$1, idx$1, bitmap$0$1) {
  this.bldr$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Ljava_lang_StringBuilder(bldr$lzy$1, bitmap$0$1).append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuilder(str$1, start$1.elem$1, cur$1.elem$1);
  this.bldr$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Ljava_lang_StringBuilder(bldr$lzy$1, bitmap$0$1).append__C__Ljava_lang_StringBuilder(ch);
  start$1.elem$1 = idx$1.elem$1
});
ScalaJS.c.scala_StringContext$.prototype.unapplySeq__Lscala_StringContext__ = (function(x$0) {
  return this.unapplySeq__Lscala_StringContext__Lscala_Option(x$0)
});
ScalaJS.c.scala_StringContext$.prototype.apply__Lscala_collection_Seq__ = (function(parts) {
  return this.apply__Lscala_collection_Seq__Lscala_StringContext(parts)
});
ScalaJS.c.scala_StringContext$.prototype.treatEscapes__T__ = (function(str) {
  return this.treatEscapes__T__T(str)
});
/** @constructor */
ScalaJS.inheritable.scala_StringContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_StringContext$.prototype = ScalaJS.c.scala_StringContext$.prototype;
ScalaJS.is.scala_StringContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_StringContext$)))
});
ScalaJS.as.scala_StringContext$ = (function(obj) {
  if ((ScalaJS.is.scala_StringContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.StringContext")
  }
});
ScalaJS.isArrayOf.scala_StringContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_StringContext$)))
});
ScalaJS.asArrayOf.scala_StringContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_StringContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.StringContext;", depth)
  }
});
ScalaJS.data.scala_StringContext$ = new ScalaJS.ClassTypeData({
  scala_StringContext$: 0
}, false, "scala.StringContext$", ScalaJS.data.java_lang_Object, {
  scala_StringContext$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_StringContext$.prototype.$classData = ScalaJS.data.scala_StringContext$;
ScalaJS.moduleInstances.scala_StringContext = undefined;
ScalaJS.modules.scala_StringContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_StringContext)) {
    ScalaJS.moduleInstances.scala_StringContext = new ScalaJS.c.scala_StringContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_StringContext
});
//@ sourceMappingURL=StringContext$.js.map
