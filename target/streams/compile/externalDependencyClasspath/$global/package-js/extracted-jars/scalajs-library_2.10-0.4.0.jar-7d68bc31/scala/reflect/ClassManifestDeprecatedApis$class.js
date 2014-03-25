ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__erasure__Lscala_reflect_ClassTag__Ljava_lang_Class = (function($$this) {
  return $$this.runtimeClass__Ljava_lang_Class()
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__subtype__Lscala_reflect_ClassTag__Ljava_lang_Class__Ljava_lang_Class__Z = (function($$this, sub, sup) {
  return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__loop$1__Lscala_reflect_ClassTag__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Ljava_lang_Class__Z($$this, ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Class.getArrayOf(), [sub]), 1)))), ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())), sup)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__subargs__Lscala_reflect_ClassTag__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Z = (function($$this, args1, args2) {
  return args1.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z(args2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x0$1, x1$1) {
      var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(x0$1, x1$1);
      matchEnd5: {
        if ((x1 !== null)) {
          var x = ScalaJS.as.scala_reflect_OptManifest(x1.$$und1__O());
          var y = ScalaJS.as.scala_reflect_OptManifest(x1.$$und2__O());
          if (ScalaJS.is.scala_reflect_ClassTag(x)) {
            var x2 = ScalaJS.as.scala_reflect_ClassTag(x);
            if (ScalaJS.is.scala_reflect_ClassTag(y)) {
              var x3 = ScalaJS.as.scala_reflect_ClassTag(y);
              var jsx$1 = x2.$$less$colon$less__Lscala_reflect_ClassTag__Z(x3);
              break matchEnd5
            }
          }
        };
        if ((x1 !== null)) {
          var x$2 = ScalaJS.as.scala_reflect_OptManifest(x1.$$und1__O());
          var y$2 = ScalaJS.as.scala_reflect_OptManifest(x1.$$und2__O());
          var jsx$1 = ((x$2 === ScalaJS.modules.scala_reflect_NoManifest()) && (y$2 === ScalaJS.modules.scala_reflect_NoManifest()));
          break matchEnd5
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bZ(jsx$1)
    })
  })()))
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__$less$colon$less__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag__Z = (function($$this, that) {
  if ((!ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__cannotMatch$1__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag__Z($$this, that))) {
    if (ScalaJS.anyRefEqEq($$this.erasure__Ljava_lang_Class(), that.erasure__Ljava_lang_Class())) {
      return ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__subargs__Lscala_reflect_ClassTag__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Z($$this, $$this.typeArguments__Lscala_collection_immutable_List(), that.typeArguments__Lscala_collection_immutable_List())
    } else {
      return (that.typeArguments__Lscala_collection_immutable_List().isEmpty__Z() && ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__subtype__Lscala_reflect_ClassTag__Ljava_lang_Class__Ljava_lang_Class__Z($$this, $$this.erasure__Ljava_lang_Class(), that.erasure__Ljava_lang_Class()))
    }
  } else {
    return false
  }
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__$greater$colon$greater__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag__Z = (function($$this, that) {
  return that.$$less$colon$less__Lscala_reflect_ClassTag__Z($$this)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__canEqual__Lscala_reflect_ClassTag__O__Z = (function($$this, other) {
  var x1 = other;
  if (ScalaJS.is.scala_reflect_ClassTag(x1)) {
    return true
  };
  return false
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__arrayClass__Lscala_reflect_ClassTag__Ljava_lang_Class__Ljava_lang_Class = (function($$this, tp) {
  return ScalaJS.objectGetClass(ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O(tp, 0))
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__arrayManifest__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag = (function($$this) {
  return ScalaJS.modules.scala_reflect_package().ClassManifest__Lscala_reflect_ClassManifestFactory$().classType__Ljava_lang_Class__Lscala_reflect_OptManifest__Lscala_collection_Seq__Lscala_reflect_ClassTag($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.erasure__Ljava_lang_Class()), $$this, ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_reflect_OptManifest.getArrayOf(), []), 1)))
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray__Lscala_reflect_ClassTag__I__O = (function($$this, len) {
  return ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O($$this.erasure__Ljava_lang_Class(), len)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray2__Lscala_reflect_ClassTag__I__AO = (function($$this, len) {
  return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.erasure__Ljava_lang_Class()), len), 1)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray3__Lscala_reflect_ClassTag__I__AAO = (function($$this, len) {
  return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.erasure__Ljava_lang_Class())), len), 2)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray4__Lscala_reflect_ClassTag__I__AAAO = (function($$this, len) {
  return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.erasure__Ljava_lang_Class()))), len), 3)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArray5__Lscala_reflect_ClassTag__I__AAAAO = (function($$this, len) {
  return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.arrayClass__Ljava_lang_Class__Ljava_lang_Class($$this.erasure__Ljava_lang_Class())))), len), 4)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newWrappedArray__Lscala_reflect_ClassTag__I__Lscala_collection_mutable_WrappedArray = (function($$this, len) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO(ScalaJS.asArrayOf.java_lang_Object($$this.newArray__I__O(len), 1))
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__newArrayBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef().init___Lscala_reflect_ClassTag($$this)
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__typeArguments__Lscala_reflect_ClassTag__Lscala_collection_immutable_List = (function($$this) {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__argString__Lscala_reflect_ClassTag__T = (function($$this) {
  if ($$this.typeArguments__Lscala_collection_immutable_List().nonEmpty__Z()) {
    return $$this.typeArguments__Lscala_collection_immutable_List().mkString__T__T__T__T("[", ", ", "]")
  } else {
    if ($$this.erasure__Ljava_lang_Class().isArray__Z()) {
      return (("[" + ScalaJS.modules.scala_reflect_package().ClassManifest__Lscala_reflect_ClassManifestFactory$().fromClass__Ljava_lang_Class__Lscala_reflect_ClassTag($$this.erasure__Ljava_lang_Class().getComponentType__Ljava_lang_Class())) + "]")
    } else {
      return ""
    }
  }
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__loop$1__Lscala_reflect_ClassTag__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set__Ljava_lang_Class__Z = (function($$this, left, seen, sup$1) {
  tailCallLoop: while (true) {
    if (left.nonEmpty__Z()) {
      var next = ScalaJS.as.java_lang_Class(left.head__O());
      var supers = ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(next.getInterfaces__ALjava_lang_Class(), 1)).toSet__Lscala_collection_immutable_Set().$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(ScalaJS.modules.scala_Option().option2Iterable__Lscala_Option__Lscala_collection_Iterable(ScalaJS.modules.scala_Option().apply__O__Lscala_Option(next.getSuperclass__Ljava_lang_Class()))));
      if (supers.apply__O__Z(sup$1)) {
        return true
      } else {
        var xs = ScalaJS.as.scala_collection_immutable_Set(left.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(supers).filterNot__Lscala_Function1__O(seen));
        var temp$left = ScalaJS.as.scala_collection_immutable_Set(xs.$$minus__O__Lscala_collection_Set(next));
        var temp$seen = ScalaJS.as.scala_collection_immutable_Set(seen.$$plus__O__Lscala_collection_Set(next));
        left = temp$left;
        seen = temp$seen;
        continue tailCallLoop
      }
    } else {
      return false
    }
  }
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__cannotMatch$1__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag__Z = (function($$this, that$1) {
  return (((ScalaJS.is.scala_reflect_AnyValManifest(that$1) || (that$1 === ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().AnyVal__Lscala_reflect_Manifest())) || (that$1 === ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().Nothing__Lscala_reflect_Manifest())) || (that$1 === ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$().Null__Lscala_reflect_Manifest()))
});
ScalaJS.impls.scala_reflect_ClassManifestDeprecatedApis$class__$init$__Lscala_reflect_ClassTag__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ClassManifestDeprecatedApis$class.js.map
