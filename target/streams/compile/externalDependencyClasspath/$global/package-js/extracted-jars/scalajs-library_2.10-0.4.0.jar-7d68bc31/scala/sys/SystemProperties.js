/** @constructor */
ScalaJS.c.scala_sys_SystemProperties = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this)
});
ScalaJS.c.scala_sys_SystemProperties.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_sys_SystemProperties.prototype.constructor = ScalaJS.c.scala_sys_SystemProperties;
ScalaJS.c.scala_sys_SystemProperties.prototype.scala$sys$SystemProperties$$super$contains__T__Z = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__contains__Lscala_collection_MapLike__O__Z(this, key)
});
ScalaJS.c.scala_sys_SystemProperties.prototype.empty__Lscala_sys_SystemProperties = (function() {
  return new ScalaJS.c.scala_sys_SystemProperties().init___()
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$default__T__T = (function(key) {
  return null
});
ScalaJS.c.scala_sys_SystemProperties.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.as.scala_collection_Iterator(this.wrapAccess__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.as.scala_collection_MapLike(ScalaJS.modules.scala_collection_JavaConverters().propertiesAsScalaMapConverter__Ljava_util_Properties__Lscala_collection_convert_Decorators$AsScala(ScalaJS.modules.java_lang_System().getProperties__Ljava_util_Properties()).asScala__O()).iterator__Lscala_collection_Iterator()
    })
  })())).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
    })
  })())))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.get__T__Lscala_Option = (function(key) {
  return this.wrapAccess__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(key$2) {
    return (function() {
      return ScalaJS.modules.scala_Option().apply__O__Lscala_Option(ScalaJS.modules.java_lang_System().getProperty__T__T(key$2))
    })
  })(key))).flatMap__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return x
    })
  })()))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.contains__T__Z = (function(key) {
  return this.wrapAccess__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, key$1) {
    return (function() {
      return ScalaJS.bZ(arg$outer.scala$sys$SystemProperties$$super$contains__T__Z(key$1))
    })
  })(this, key))).exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      x = ScalaJS.uZ(x);
      return ScalaJS.bZ(x)
    })
  })()))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$minus$eq__T__Lscala_sys_SystemProperties = (function(key) {
  this.wrapAccess__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(key$3) {
    return (function() {
      return ScalaJS.modules.java_lang_System().clearProperty__T__T(key$3)
    })
  })(key)));
  return this
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$plus$eq__Lscala_Tuple2__Lscala_sys_SystemProperties = (function(kv) {
  this.wrapAccess__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(kv$1) {
    return (function() {
      return ScalaJS.modules.java_lang_System().setProperty__T__T__T(ScalaJS.as.java_lang_String(kv$1.$$und1__O()), ScalaJS.as.java_lang_String(kv$1.$$und2__O()))
    })
  })(kv)));
  return this
});
ScalaJS.c.scala_sys_SystemProperties.prototype.wrapAccess__Lscala_Function0__Lscala_Option = (function(body) {
  try {
    return new ScalaJS.c.scala_Some().init___O(body.apply__O())
  } catch ($jsexc$) {
    if (ScalaJS.is.java_security_AccessControlException($jsexc$)) {
      return ScalaJS.modules.scala_None()
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_sys_SystemProperties(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_sys_SystemProperties(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_sys_SystemProperties(kv)
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__T__Lscala_sys_SystemProperties(ScalaJS.as.java_lang_String(elem))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__T__Lscala_sys_SystemProperties(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.contains__O__Z = (function(key) {
  return this.contains__T__Z(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.get__O__Lscala_Option = (function(key) {
  return this.get__T__Lscala_Option(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$default__O__O = (function(key) {
  return this.$default__T__T(ScalaJS.as.java_lang_String(key))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_sys_SystemProperties()
});
ScalaJS.c.scala_sys_SystemProperties.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_sys_SystemProperties()
});
ScalaJS.c.scala_sys_SystemProperties.prototype.scala$sys$SystemProperties$$super$contains__T__ = (function(key) {
  return ScalaJS.bZ(this.scala$sys$SystemProperties$$super$contains__T__Z(key))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.wrapAccess__Lscala_Function0__ = (function(body) {
  return this.wrapAccess__Lscala_Function0__Lscala_Option(body)
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$$minus$eq__T__ = (function(key$2) {
  return this.$$minus$eq__T__Lscala_sys_SystemProperties(key$2)
});
ScalaJS.c.scala_sys_SystemProperties.prototype.contains__T__ = (function(key$3) {
  return ScalaJS.bZ(this.contains__T__Z(key$3))
});
ScalaJS.c.scala_sys_SystemProperties.prototype.get__T__ = (function(key$4) {
  return this.get__T__Lscala_Option(key$4)
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$default__T__ = (function(key$5) {
  return this.$default__T__T(key$5)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_SystemProperties = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_SystemProperties.prototype = ScalaJS.c.scala_sys_SystemProperties.prototype;
ScalaJS.is.scala_sys_SystemProperties = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_SystemProperties)))
});
ScalaJS.as.scala_sys_SystemProperties = (function(obj) {
  if ((ScalaJS.is.scala_sys_SystemProperties(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.SystemProperties")
  }
});
ScalaJS.isArrayOf.scala_sys_SystemProperties = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_SystemProperties)))
});
ScalaJS.asArrayOf.scala_sys_SystemProperties = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_SystemProperties(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.SystemProperties;", depth)
  }
});
ScalaJS.data.scala_sys_SystemProperties = new ScalaJS.ClassTypeData({
  scala_sys_SystemProperties: 0
}, false, "scala.sys.SystemProperties", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_sys_SystemProperties: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_SystemProperties.prototype.$classData = ScalaJS.data.scala_sys_SystemProperties;
//@ sourceMappingURL=SystemProperties.js.map
