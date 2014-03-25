/** @constructor */
ScalaJS.c.scala_beans_ScalaBeanInfo = (function() {
  ScalaJS.c.java_beans_SimpleBeanInfo.call(this);
  this.clazz$2 = null;
  this.props$2 = null;
  this.scala$beans$ScalaBeanInfo$$methods$f = null;
  this.pd$2 = null;
  this.md$2 = null
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype = new ScalaJS.inheritable.java_beans_SimpleBeanInfo();
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.constructor = ScalaJS.c.scala_beans_ScalaBeanInfo;
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.pd__p2__ALjava_beans_PropertyDescriptor = (function() {
  return this.pd$2
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.md__p2__ALjava_beans_MethodDescriptor = (function() {
  return this.md$2
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.getPropertyDescriptors__ALjava_beans_PropertyDescriptor = (function() {
  return this.pd__p2__ALjava_beans_PropertyDescriptor()
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.getMethodDescriptors__ALjava_beans_MethodDescriptor = (function() {
  return this.md__p2__ALjava_beans_MethodDescriptor()
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.init__p2__V = (function() {
  var i = 0;
  while ((i < this.props$2.underlying.length)) {
    this.pd__p2__ALjava_beans_PropertyDescriptor().underlying[((i / 3) | 0)] = new ScalaJS.c.java_beans_PropertyDescriptor().init___T__Ljava_lang_Class__T__T(this.props$2.underlying[i], this.clazz$2, this.props$2.underlying[(i + 1)], this.props$2.underlying[(i + 2)]);
    i = (i + 3)
  }
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.init___Ljava_lang_Class__AT__AT = (function(clazz, props, methods) {
  this.clazz$2 = clazz;
  this.props$2 = props;
  this.scala$beans$ScalaBeanInfo$$methods$f = methods;
  ScalaJS.c.java_beans_SimpleBeanInfo.prototype.init___.call(this);
  this.pd$2 = ScalaJS.newArrayObject(ScalaJS.data.java_beans_PropertyDescriptor.getArrayOf(), [((props.underlying.length / 3) | 0)]);
  this.md$2 = ScalaJS.asArrayOf.java_beans_MethodDescriptor(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(clazz.getMethods__ALjava_lang_reflect_Method(), 1)).withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(m) {
      return ScalaJS.bZ(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(arg$outer.scala$beans$ScalaBeanInfo$$methods$f, 1)).exists__Lscala_Function1__Z(new ScalaJS.c.scala_beans_ScalaBeanInfo$$anonfun$1$$anonfun$apply$1().init___Lscala_beans_ScalaBeanInfo$$anonfun$1__Ljava_lang_reflect_Method(this, m)))
    })
  })(this))).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(m) {
      return new ScalaJS.c.java_beans_MethodDescriptor().init___Ljava_lang_reflect_Method(m)
    })
  })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_beans_MethodDescriptor.getClassOf()))), 1);
  this.init__p2__V();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_beans_ScalaBeanInfo = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_beans_ScalaBeanInfo.prototype = ScalaJS.c.scala_beans_ScalaBeanInfo.prototype;
ScalaJS.is.scala_beans_ScalaBeanInfo = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_beans_ScalaBeanInfo)))
});
ScalaJS.as.scala_beans_ScalaBeanInfo = (function(obj) {
  if ((ScalaJS.is.scala_beans_ScalaBeanInfo(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.beans.ScalaBeanInfo")
  }
});
ScalaJS.isArrayOf.scala_beans_ScalaBeanInfo = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_beans_ScalaBeanInfo)))
});
ScalaJS.asArrayOf.scala_beans_ScalaBeanInfo = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_beans_ScalaBeanInfo(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.beans.ScalaBeanInfo;", depth)
  }
});
ScalaJS.data.scala_beans_ScalaBeanInfo = new ScalaJS.ClassTypeData({
  scala_beans_ScalaBeanInfo: 0
}, false, "scala.beans.ScalaBeanInfo", ScalaJS.data.java_beans_SimpleBeanInfo, {
  scala_beans_ScalaBeanInfo: 1,
  java_beans_SimpleBeanInfo: 1,
  java_beans_BeanInfo: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_beans_ScalaBeanInfo.prototype.$classData = ScalaJS.data.scala_beans_ScalaBeanInfo;
//@ sourceMappingURL=ScalaBeanInfo.js.map
